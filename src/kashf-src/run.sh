# Usage ------------------------------------

# Running a project (e.g., harf):
# sh run.sh harf

# Acceptable arguments: 
# main, about-us, join-us, contact-us, alefba, harf

# ------------------------------------------

root=`git rev-parse --show-toplevel`
   
echo "Running $1 ............................"    
src=$root/src/$1-src/      
cd $src
rm -rf node_modules package-lock.json && npm install --force && npm run start