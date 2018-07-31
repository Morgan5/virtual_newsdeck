#!/bin/bash

#
# Builds the webapp from source
#

start_time=`date +%s`

# Delete dist folder
DIR=dist
if [ -d "$DIR" ]; then
    printf '%s\n' "Removing $DIR folder..."
    rm -rf "$DIR"
    printf "Done\n"
fi

# Build via webpack
./node_modules/webpack/bin/webpack.js -d || exit 1

# Run NPM scripts and copy server files
npm run copy > /dev/null
cp src/index.html dist/

end_time=`date +%s`
timeTaken=`expr $end_time - $start_time`
printf "\nBuild time: $timeTaken seconds\n"
