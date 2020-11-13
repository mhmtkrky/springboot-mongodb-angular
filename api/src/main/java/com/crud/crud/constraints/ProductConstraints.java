package com.crud.crud.constraints;

public final class ProductConstraints {

    public static final String TABLE_NAME = "product";

    public static final String COLUMN_NAME = "name";
    public static final String COLUMN_DESCRIPTION = "description";
    public static final String COLUMN_URL = "url";
    public static final String COLUMN_API_TYPE = "api_type";
    public static final String COLUMN_APPLICATION_ID = "applicationId";

    public static final int COLUMN_NAME_MAX_SIZE = 50;
    public static final int COLUMN_DESCRIPTION_MAX_SIZE = 200;
    public static final String COLUMN_IS_USED = "isUsed";


    private ProductConstraints(){}
}
