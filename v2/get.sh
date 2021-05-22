mkdir  -p "data/raw";

for (( YEAR = 2017; YEAR >= 1998 ; YEAR-- )); do
    for (( MONTH = 1; MONTH <= 12; MONTH++ )); do
        URL="https://www.google.com/doodles/json/$YEAR/$MONTH?full=1";

        ZERO_MONTH=$(printf %02d $MONTH);
        wget -c $URL -O "$DATA_PATH/$YEAR-$ZERO_MONTH.raw.json";
    done
done
