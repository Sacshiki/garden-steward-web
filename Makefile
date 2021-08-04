# nvm use --delete-prefix v14.15.5
.PHONY: install build test run proto

install:
	yarn install

run:
	yarn dev
