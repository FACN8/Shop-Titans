BEGIN;

DROP TABLE IF EXISTS shop,cart;

CREATE TABLE IF NOT EXISTS shop (
    item_id          SERIAL     PRIMARY KEY,
    item_name    TEXT       NOT NULL,
    item_price        NUMERIC(15,2)       NOT NULL,
    price_currency   VARCHAR       NOT NULL
);

CREATE TABLE IF NOT EXISTS cart (
    cart_id          SERIAL     PRIMARY KEY,
    item_id          INTEGER     NOT NULL
);

COMMIT;
