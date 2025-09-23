erDiagram
    %% アプリケーションユーザー情報 
    org_mst ||--|{ user_mst : 組織に1人以上のユーザー
    group_mst ||--|{ user_mst : グループマスタに1人以上のユーザー
    group_mst ||--o{ org_mst : グループマスタに0人以上のユーザー
    access_mst ||--|{ group_mst : データアクセス管理マスタにはallPremissionのaccess_idが１データ以上必要
    %% アプリケーションデータ
    %%%% コト（イベント）データ
    events_data ||--|{ access_mst : データアクセスはすべてaccess_idで管理
    %%%% モノデータ
    %%%% モノ種類マスタ
    journal_data ||--|{ subject_mst : 仕訳データ
    %%%% 仕訳データ
    journal_data ||--|{ access_mst : データアクセスはすべてaccess_idで管理
    journal_accounts_mst ||--|{ journal_data : 仕訳勘定項目
    regular_journal_mst ||--|{ journal_data : 定期取引
    user_mst {
        uuid user_id pk
        text user_name "not null"
        text mail_address "not null"
        number phone_num "not null"
        blob icon
        datetime create_datetime
        text create_user_id
        datetime update_datetime
        text update_user_id
    }
    org_mst {
        text org_id pk
        text org_name "not null"
        uuid user_id fk "user_mst.user_id"
        datetime create_datetime
        text create_user_id
        datetime update_datetime
        text update_user_id
    }
    group_mst {
        text group_id pk
        uuid user_id fk "user_mst.user_id"
        text org_id fk "org_mst.org_id"
        datetime create_datetime
        text create_user_id
        datetime update_datetime
        text update_user_id
    }
    access_mst {
        text access_id pk
        text access_name "not null"
        text group_id fk "group_mst.grouP_id"
        boolean permission_read_flg
        boolean permission_update_flg
        boolean invalid_flg
        text description
        datetime create_datetime
        text create_user_id
        datetime update_datetime
        text update_user_id
    }
    events_data {
        text event_id pk
        text access_id fk "access_mst.access_id"
        text title
        boolean all_day_flg
        date start_date
        time start_time
        date end_date
        time end_time
        text description
        datetime create_datetime
        text create_user_id
        datetime update_datetime
        text update_user_id
    }
    subject_mst {
        text subject_id pk
        text subject_name "not null"
        boolean use_flg
        datetime create_datetime
        text create_user_id
        datetime update_datetime
        text update_user_id
    }
    journal_data {
        text journal_id pk
        text journal_description
        text access_id fk "access_mst.access_id"
        text subject_id fk "subject_mst.subject_id"
        date journal_date
        text debit_journal_account_id fk "journal_accounts_mst.journal_account_id"
        text credit_journal_account_id fk "journal_accounts_mst.journal_account_id"
        numeric journal_amount
        datetime create_datetime
        text create_user_id
        datetime update_datetime
        text update_user_id
    }
    journal_accounts_mst {
        text journal_account_id pk
        text journal_account_name "not null"
        text access_id fk "access_mst.access_id"
        text subject_id fk "subject_mst.subject_id"
        text category
        datetime create_datetime
        text create_user_id
        datetime update_datetime
        text update_user_id
    }
    regular_journal_mst {
        text regular_journal_id pk
        text regular_journal_name "not null"
        text access_id fk "access_mst.access_id"
        text subject_id fk "subject_mst.subject_id"
        int frequency
        int day_of_month
        int day_of_weekly
        date day_of_once
        text journal_description
        date journal_date
        text debit_journal_account_id fk "journal_accounts_mst.journal_account_id"
        text credit_journal_account_id fk "journal_accounts_mst.journal_account_id"
        numeric journal_amount
        numeric amount
        datetime create_datetime
        text create_user_id
        datetime update_datetime
        text update_user_id
    }
