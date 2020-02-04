BEGIN;

DROP TABLE IF EXISTS shop;

CREATE TABLE IF NOT EXISTS shop (
    item_id          SERIAL     PRIMARY KEY,
    item_name    TEXT       NOT NULL,
    item_price        NUMERIC(15,2)       NOT NULL,
    price_currency   VARCHAR       NOT NULL
);

COMMIT;
