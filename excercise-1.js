//NUMBER 1//
STORE "m" with 600;
STORE "a" with 2;
STORE "F" without any value;

CALCULATE "m" multiple by "a";
SET "F" value with calculation result;

DISPLAY "F";

//NUMBER 2//
STORE "Year" with any value;

IF "Year" mod 4 equal to 0;
    IF "Year" mod 100 equal to 0;
        IF "Year" mod 400 equal to 0;
            DISPLAY "Leap Year";
        ELSE;
            DISPLAY "Not Leap Year";
        END IF;
    ELSE;
        DISPLAY "Leap Year";
    END IF;
ELSE;
    DISPLAY "Not Leap Year";
END IF;

//NUMBER 3//
STORE "Laundry" with 0;

WHILE "Laundry" less than 20;
    DISPLAY "Total clothes entered is " plus "Laundry";
    DISPLAY "Do not turn on the washing machine";
    ADD "Laundry" by 1;
END WHILE;

DISPLAY "20 clothes is in, turn on the washing machine";

//NUMBER 4//
STORE "Students" with 0;

WHILE "Students" less than 41;
    DISPLAY "Student number " plus "Students";
    DISPLAY "Student nail's long? true/false";
    SET "LongNail" with true or false;
    IF "LongNail" is true;
        DISPLAY "Student get punished";
    ELSE;
        DISPLAY "Student get praised";
    END IF;
    ADD "Students" by 1;
END WHILE;