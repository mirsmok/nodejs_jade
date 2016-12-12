REPORTER = list
MOCHA_OPTS = --ui bdd -c

db:
	echo Wczytywanie danych pocz¹tkowych dla blog-test *****************************
	./db/seed.sh
test:
	clear

	echo Rozpoczynanie testów ******************************************************
	./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	tests/*.js
	echo Koniec testów

.PHONY: test db