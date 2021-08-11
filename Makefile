# nvm use --delete-prefix v14.15.5
.PHONY: install build test run proto

nvmsetup = . ${NVM_DIR}/nvm.sh && nvm use --delete-prefix v14.15.5

install :
	${nvmsetup} && yarn install
run:
	${nvmsetup} && yarn dev
