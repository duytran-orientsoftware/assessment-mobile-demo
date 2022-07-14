#! /bin/bash
set -e # see: https://www.gnu.org/software/bash/manual/bash.html#The-Set-Builtin

DEV=0
RED='\033[0;31m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NO_COLOR='\033[0m'

APP_ENV="dev"
APP_OS="android"

success(){
  echo -e "✅  ${GREEN}$1${NO_COLOR}"
}

warn(){
  echo -e "⚠️  ${YELLOW}$1${NO_COLOR}"
  if [ $DEV -eq 0 ]
  then
    exit 1
  fi
}

# while getopts ":o:" opt; do
#   case $opt in
#     o) APP_OS="$OPTARG"
#     ;;
#     \?) echo "${RED}Invalid option -$OPTARG${NO_COLOR}" >&2
#     ;;
#   esac
# done

# if [[ $APP_OS == "ios" ]]; then
#   echo -e "${GREEN}- - - - -"
#   echo -e "Fastlane 🍎  iOS $APP_ENV"
#   echo -e "- - - - -${NO_COLOR}"

#   cd apps/weme && bundle exec fastlane ios deploy
# fi

if [[ $APP_OS == "android" ]]; then
  echo -e "${YELLOW}- - - - -"
  echo "Fastlane 🤖  Android $APP_ENV"
  echo -e "- - - - -${NO_COLOR}"

  ENVFILE=fastlane/.env.${APP_ENV} bundle exec fastlane android deploy
fi

success "📦  Deploy succeeded."
