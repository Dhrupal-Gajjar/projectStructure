function setup_n() {
echo "********** NPM INSTALLATION START ****************"
echo "Enter Project Name"
read name
echo "Enter BundleID for eg. com.abc"
read bundleid
if ! git ls-files >& /dev/null; then
  echo "not in git"
  git init
fi
echo "Hello, $name and $bundleid"

printf "Hello, $name and $bundleid are you sure want to change bundle name (y/n)"

echo ""
read answer
# if echo "$answer" | grep -iq "^y" ;then
if [ "$answer" != "${answer#[Yy]}" ] ;then # this grammar (the #[] operator) means that the variable $answer where any Y or y in 1st position will be dropped if they exist.
    echo Yes
    npm install
    echo ""
if [[ $name != '' && $bundleid!=""]];
then
    npx react-native-rename "$name" -b "$bundleid" --skipGitStatusCheck
if [[ $name != '' && $bundleid==""]]
then
    npx react-native-rename "$name" --skipGitStatusCheck


else
    echo No
fi

echo "********** NPM INSTALLATION END ****************"
}

function version_check() {
  echo 'node: ' $(node -v)
  echo 'npm:  ' $(npm -v)
  echo 'yarn: ' $(yarn -v)
 # echo 'React NAtive: ' $(npx react-native info)
}

# ---------------------------------[execute]------------------------------------

version_check

setup_n
