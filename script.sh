date
echo "----------------------------------------------------------------------------------------------"

echo "************************************ DELETE NEW DEPLOYMENT ***********************************"

kubectl delete -f sbis-front-deployment.yml

echo "----------------------------------------------------------------------------------------------"

echo "*********************************** DELETE OLD DOCKER FILE ***********************************"

docker rmi sbis_front:latest

echo "********************************* END DELETE OLD DOCKER FILE *********************************"

echo "----------------------------------------------------------------------------------------------"

echo "************************************* BUILD DOCKER IMAGE  ************************************"

docker build -f Dockerfile -t sbis_front:latest .

echo "************************************* BUILD DOCKER IMAGE *************************************"

echo "********************************** END DELETE NEW DEPLOYMENT *********************************"

echo "----------------------------------------------------------------------------------------------"

echo "******************************* DELETE DOCKER IMAGE IN MINION 1&2 ******************************"

ssh -C root@192.168.42.52 docker rmi -f sbis_front:latest


ssh -C root@192.168.42.53 docker rmi -f sbis_front:latest


echo "***************************** END DELETE DOCKER IMAGE IN MINION 1&2 ****************************"

echo "----------------------------------------------------------------------------------------------"
echo "******************************** SSH DOCKER IMAGE TO MINION 1 ********************************"

docker save  sbis_front:latest | ssh -C root@192.168.42.52 docker load

echo "****************************** END SSH DOCKER IMAGE TO MINION 1 ******************************"

echo "----------------------------------------------------------------------------------------------"

echo "******************************** SSH DOCKER IMAGE TO MINION 2 ********************************"

docker save  sbis_front:latest | ssh -C root@192.168.42.53 docker load

echo "****************************** END SSH DOCKER IMAGE TO MINION 2 ******************************"

echo "----------------------------------------------------------------------------------------------"

echo "********************************** DELETE OLD DEPLOYMENT FILE ********************************"

rm -rf sbis-front-deployment.yml

echo "******************************** END DELETE OLD DEPLOYMENT FILE ******************************"

echo "----------------------------------------------------------------------------------------------"

echo "********************************** CREATE NEW DEPLOYMENT FILE ********************************"

cat <<EOF > ./sbis-front-deployment.yml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: sbis-front-deployment
spec:
  replicas: 1
  template:
    metadata:
      labels:
        name: sbis-front-deployment
    spec:
      containers:
      - image: sbis_front:latest
        imagePullPolicy : Never
        name: sbis-front
        env:
        - name: NODE_ENV
          value: "production"
        - name: SBIS_SERVICE
          value: "http://sbis-service:8085"
        - name: SBIS_FILESERVER
          value: "http://sbis-file-server:3100" 
        - name: SBIS_REPORTSERVER
          value: "http://sbis-servicereport:8080"
        ports:
        - name: http-server
          containerPort: 3000
        volumeMounts:
        - name: express-log
          mountPath: /usr/src/app/server/logs
      volumes:
      - name: express-log
        persistentVolumeClaim:
          claimName: express-log

EOF


echo "******************************** END CREATE NEW DEPLOYMENT FILE ******************************"

echo "----------------------------------------------------------------------------------------------"

echo "************************************ CREATE NEW DEPLOYMENT ***********************************"

kubectl create -f sbis-front-deployment.yml

echo "********************************** END CREATE NEW DEPLOYMENT *********************************"

echo "----------------------------------------------------------------------------------------------"

echo "************************************** DELETE OLD SERVICE ************************************"

kubectl delete -f sbis-front-service.yml

echo "************************************ END DELETE OLD SERVICE **********************************"

echo "----------------------------------------------------------------------------------------------"

echo "********************************** DELETE OLD DEPLOYMENT FILE ********************************"

rm -rf sbis-front-service.yml

echo "******************************** END DELETE OLD DEPLOYMENT FILE ******************************"

echo "----------------------------------------------------------------------------------------------"

echo "*********************************** CREATE NEW SERVICE FILE **********************************"

cat <<EOF > ./sbis-front-service.yml
apiVersion: v1
kind: Service
metadata:
 name: sbis-front
 labels:
   name: sbis-front-service
spec:
 type: NodePort
 ports:
   - port: 3000
     nodePort: 31111
 selector:
   name: sbis-front-deployment
EOF

echo "********************************* END CREATE NEW SERVICE FILE ********************************"

echo "----------------------------------------------------------------------------------------------"

echo "************************************ CREATE NEW SERVICE ***************************************"

kubectl create -f sbis-front-service.yml

echo "********************************** END CREATE NEW SERVICE *************************************"

echo "----------------------------------------------------------------------------------------------"

date
