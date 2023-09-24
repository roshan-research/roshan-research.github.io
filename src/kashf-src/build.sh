root=$(git rev-parse --show-toplevel)
build() {
    src="$root/src/$1-src/"
    cd "$src"
    npm install
    npm run build
    if [ "$1" = "main" ]; then
        cp -r "$src/build/"* "$root/"
    else             
        cp -r "$src/build/"* "$root/$1/"
    fi
}
products=("main" "about-us" "join-us" "contact-us" "alefba" "harf")
for product in "${products[@]}"; do
    build "$product"
done
