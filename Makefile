REPORTER = list
MOCHA_OPTS = --ui bdd -c

db:
	echo Wczytywanie danych pocz�tkowych dla blog-test *****************************
	./db/seed.sh
test:
	clear

	echo Rozpoczynanie test�w ******************************************************
	./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	tests/*.js
	echo Koniec test�w

.PHONY: test db