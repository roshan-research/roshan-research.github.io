root=`git rev-parse --show-toplevel`

build(){                   
    src=$root/src/$1-src/      
    cd $src
    rm -rf node_modules package-lock.json
    npm install --legacy-peer-deps && npm run build

    if [ $1 = "main" ]; then              
        cp -r $src/build/* $root/
    else    
        rm -rf $root/$1/
        mkdir $root/$1/  
        cp -r $src/build/* $root/$1/    
    fi
}

products=("main" "about-us" "join-us" "contact-us" "alefba" "harf")            

for product in ${products[@]}; do
    build $product
done