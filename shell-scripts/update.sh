echo "updating websites according to the latest source code"

cd ../../shell-scripts

echo "updating alefba"
rm -r ../alefba
mkdir ../alefba
cp -r ../src/alefba-src/build/* ../alefba
echo "alefba updated"

echo "updating join us"
rm -r ../join-us
mkdir ../join-us
cp -r ../src/join-us-src/build/* ../join-us
echo "join us updated"

echo "updating contact us"
rm -r ../contact-us
mkdir ../contact-us
cp -r ../src/contact-us-src/build/* ../contact-us
echo "contact us updated"

echo "updating roshan"
cp -r ../src/main-src/build/* ../
echo "roshan updated"

echo "updatings finished successfully"

cd ../
git add .
git commit -m 'updated'
git push origin main

echo "pushed to github"