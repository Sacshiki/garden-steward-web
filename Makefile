# nvm use --delete-prefix v14.15.5
.PHONY: install build test run proto

install:
	yarn install
nvm :
	. ${NVM_DIR}/nvm.sh && nvm use 13
run:
	yarn dev
