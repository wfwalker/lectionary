#makefile for running tests

test:
	@./node_modules/.bin/mocha \
		--reporter spec \
		--ui bdd

watch:
	@./node_modules/.bin/mocha \
	--reporter min \
	--ui bdd \
	--growl \
	--watch

.PHONY: test watchb