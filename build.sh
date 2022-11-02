# Usage ------------------------------------

# Building a specific project (e.g., main):
# sh build.sh main

# Buidling multiple projects (e.g., main && harf && alefba )
# sh build.sh main alefba

# Buidling all projects
# sh build.sh

# Acceptable arguments: 
# main, about-us, join-us, contact-us, alefba, harf

# ------------------------------------------

root=`git rev-parse --show-toplevel`

build(){    
    echo "Building $1 ............................"    
    src=$root/src/$1-src/      
    cd $src
    npm install --legacy-peer-deps && npm run build
    
    if [ $1 = "main" ]; then              
        cp -r $src/build/* $root/
    else    
        rm -r $root/$1/
        mkdir $root/$1/  
        cp -r $src/build/* $root/$1/    
    fi
}

products=( "$@" )
if [ $# -eq 0 ]; then
    products=("main" "about-us" "join-us" "contact-us" "alefba" "harf")
fi
 
for product in ${products[@]}; do
    build $product
done

echo "Finish Building ............................"