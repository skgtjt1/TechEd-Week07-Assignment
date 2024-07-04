CREATE TABLE "reviews"(
    "id" BIGINT NOT NULL,
    "username" VARCHAR(64) NOT NULL,
    "review_text" TEXT NOT NULL,
    "user_rating" INTEGER NOT NULL,
    "karma" BIGINT NOT NULL,
    "expansion_id" INTEGER NOT NULL
);
ALTER TABLE
    "reviews" ADD PRIMARY KEY("id");
ALTER TABLE
    "reviews" ADD CONSTRAINT "reviews_expansion_id_unique" UNIQUE("expansion_id");
CREATE TABLE "expansions"(
    "id" BIGINT NOT NULL,
    "exp_name" VARCHAR(255) NULL,
    "release_date" DATE NOT NULL,
    "image_url" TEXT NOT NULL,
    "meta_rating" FLOAT(53) NOT NULL
);
ALTER TABLE
    "expansions" ADD PRIMARY KEY("id");
ALTER TABLE
    "reviews" ADD CONSTRAINT "reviews_expansion_id_foreign" FOREIGN KEY("expansion_id") REFERENCES "expansions"("id");