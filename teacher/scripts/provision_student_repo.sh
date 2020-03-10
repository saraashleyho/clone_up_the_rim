#!/bin/sh

if [ ! -f README.md ]
then
  echo 'Run this command from root!'
  exit 1
fi 

LEARNING_GIT_URL=$(git remote -v | sed 's Teaching Learning ' | head -1 | cut -f1 -d " " | cut -c 8-)

if [ -z "$LEARNING_GIT_URL" ]
then
  echo 'This repo is missing an RBI-Teaching origin remote!'
  exit 1
else
  read -p "🏡  Is there a repo ready at $LEARNING_GIT_URL (Y/n)?" REPO_EXISTS
  if [[ "$REPO_EXISTS" != "Y" && "$REPO_EXISTS" != "y" && "$REPO_EXISTS" != "" ]]
  then
    echo "Make a repo at $LEARNING_GIT_URL and try again..."
    exit 1
  fi
fi

echo '🚚 ... Temporarily moving .git history'
mv .git .tmp

echo '🔎 ... Hiding the solution from students'
source teacher/scripts/clobber_solution.sh

echo '📓 ... Deleting teacher notes'
LINE_NUM=$(grep -n "# TEACHER NOTES" README.md | cut -f1 -d ":")
if [ ! -z "$LINE_NUM" ]
then
  let "LINE_NUM=LINE_NUM-1" 
  sed -i "1,$LINE_NUM!d" README.md
fi

echo '🔓 ... Adding CODEOWNERS file'
echo '* @rbilabs/rbi-teaching' > CODEOWNERS

echo '🗂 ... Removing the teacher folder'
rm -rf teacher

echo '🌱 ... Making new remote'
git init
git add .
git commit -m "ready for students"
git remote add learning $LEARNING_GIT_URL
if git push -fu learning master
then 
  echo '🚧 ... Removing remote and restoring git history'
  git remote remove learning
  rm -rf .git
  mv .tmp .git
  echo '✅ ... Restoring solution and deleted files to this repo'
  git stash -u
  echo "🎉 ... Repo is ready at $LEARNING_GIT_URL"
else
  echo "👺 ... You lied, there was no repo at $LEARNING_GIT_URL.  Make one and try again."
  echo '🚧 ... Restoring git history'
  rm -rf .git
  mv .tmp .git 
  echo '✅ ... Restoring solution and deleted files to this repo'
  git stash -u 
  echo "💥 ... Something went wrong.  Check the logs and try again."
  exit 1
fi