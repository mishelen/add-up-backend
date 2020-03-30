#!/bin/bash
sudo apt-get update
sudo apt-get install curl -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
command -v nvm # Verify that nvm has been installed
nvm install 12
nvm use default # The first version installed becomes the default
node -v
whereis node
npm -v
which npm
command -v npm
