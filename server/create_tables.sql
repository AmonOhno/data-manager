-- ユーザーマスタテーブル
CREATE TABLE user_mst (
    user_id UUID PRIMARY KEY,
    user_name TEXT NOT NULL,
    mail_address TEXT NOT NULL,
    phone_num NUMERIC NOT NULL,
    icon BYTEA,
    create_datetime TIMESTAMP,
    create_user_id TEXT,
    update_datetime TIMESTAMP,
    update_user_id TEXT
);

-- 組織マスタテーブル
CREATE TABLE org_mst (
    org_id TEXT PRIMARY KEY,
    org_name TEXT NOT NULL,
    user_id UUID REFERENCES user_mst(user_id),
    create_datetime TIMESTAMP,
    create_user_id TEXT,
    update_datetime TIMESTAMP,
    update_user_id TEXT
);

-- グループマスタテーブル
CREATE TABLE group_mst (
    group_id TEXT PRIMARY KEY,
    user_id UUID REFERENCES user_mst(user_id),
    org_id TEXT REFERENCES org_mst(org_id),
    create_datetime TIMESTAMP,
    create_user_id TEXT,
    update_datetime TIMESTAMP,
    update_user_id TEXT
);

-- アクセス管理マスタテーブル
CREATE TABLE access_mst (
    access_id TEXT PRIMARY KEY,
    access_name TEXT NOT NULL,
    group_id TEXT REFERENCES group_mst(group_id),
    permission_read_flg BOOLEAN,
    permission_update_flg BOOLEAN,
    invalid_flg BOOLEAN,
    description TEXT,
    create_datetime TIMESTAMP,
    create_user_id TEXT,
    update_datetime TIMESTAMP,
    update_user_id TEXT
);

-- イベントデータテーブル
CREATE TABLE events_data (
    event_id TEXT PRIMARY KEY,
    access_id TEXT REFERENCES access_mst(access_id),
    title TEXT,
    all_day_flg BOOLEAN,
    start_date DATE,
    start_time TIME,
    end_date DATE,
    end_time TIME,
    description TEXT,
    create_datetime TIMESTAMP,
    create_user_id TEXT,
    update_datetime TIMESTAMP,
    update_user_id TEXT
);

-- 科目マスタテーブル
CREATE TABLE subject_mst (
    subject_id TEXT PRIMARY KEY,
    subject_name TEXT NOT NULL,
    use_flg BOOLEAN,
    create_datetime TIMESTAMP,
    create_user_id TEXT,
    update_datetime TIMESTAMP,
    update_user_id TEXT
);

-- 仕訳勘定項目マスタテーブル
CREATE TABLE journal_accounts_mst (
    journal_account_id TEXT PRIMARY KEY,
    journal_account_name TEXT NOT NULL,
    access_id TEXT REFERENCES access_mst(access_id),
    subject_id TEXT REFERENCES subject_mst(subject_id),
    category TEXT,
    create_datetime TIMESTAMP,
    create_user_id TEXT,
    update_datetime TIMESTAMP,
    update_user_id TEXT
);

-- 仕訳データテーブル
CREATE TABLE journal_data (
    journal_id TEXT PRIMARY KEY,
    journal_description TEXT,
    access_id TEXT REFERENCES access_mst(access_id),
    subject_id TEXT REFERENCES subject_mst(subject_id),
    journal_date DATE,
    debit_journal_account_id TEXT REFERENCES journal_accounts_mst(journal_account_id),
    credit_journal_account_id TEXT REFERENCES journal_accounts_mst(journal_account_id),
    journal_amount NUMERIC,
    create_datetime TIMESTAMP,
    create_user_id TEXT,
    update_datetime TIMESTAMP,
    update_user_id TEXT
);

-- 定期仕訳マスタテーブル
CREATE TABLE regular_journal_mst (
    regular_journal_id TEXT PRIMARY KEY,
    regular_journal_name TEXT NOT NULL,
    access_id TEXT REFERENCES access_mst(access_id),
    subject_id TEXT REFERENCES subject_mst(subject_id),
    frequency INTEGER,
    day_of_month INTEGER,
    day_of_weekly INTEGER,
    day_of_once DATE,
    journal_description TEXT,
    journal_date DATE,
    debit_journal_account_id TEXT REFERENCES journal_accounts_mst(journal_account_id),
    credit_journal_account_id TEXT REFERENCES journal_accounts_mst(journal_account_id),
    journal_amount NUMERIC,
    amount NUMERIC,
    create_datetime TIMESTAMP,
    create_user_id TEXT,
    update_datetime TIMESTAMP,
    update_user_id TEXT
);

-- インデックスの作成
CREATE INDEX idx_user_mst_mail ON user_mst(mail_address);
CREATE INDEX idx_events_data_date ON events_data(start_date, end_date);
CREATE INDEX idx_journal_data_date ON journal_data(journal_date);
CREATE INDEX idx_journal_data_accounts ON journal_data(debit_journal_account_id, credit_journal_account_id);