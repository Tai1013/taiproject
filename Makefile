init:
	pnpm run init

dev:
	pnpm run dev

build:
	pnpm run build
	git add .
	git commit -m 'build: github page' --no-verify

release:
	pnpm run release
	git push --follow-tags origin main

dev-init:
	killall -9 node 