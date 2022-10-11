# Usage ------------------------------------

# Deploy a specific project (e.g., main):
# sh deploy.sh main

# Deploy multiple projects (e.g., main && harf && alefba )
# sh deploy.sh main alefba

# Deploy all projects
# sh deploy.sh

# Acceptable arguments: 
# main, about-us, join-us, contact-us, alefba, harf

# ------------------------------------------

sh build.sh $@

echo "Pushing to github"
root=`git rev-parse --show-toplevel`

cd $root
git add .
git commit -m 'updated'
git push origin main