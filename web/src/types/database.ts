export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user_mst: {
        Row: {
          user_id: string
          user_name: string
          mail_address: string
          phone_num: number
          icon: string | null
          create_datetime: string | null
          create_user_id: string | null
          update_datetime: string | null
          update_user_id: string | null
        }
        Insert: {
          user_id: string
          user_name: string
          mail_address: string
          phone_num: number
          icon?: string | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
        Update: {
          user_id?: string
          user_name?: string
          mail_address?: string
          phone_num?: number
          icon?: string | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
      }
      org_mst: {
        Row: {
          org_id: string
          org_name: string
          user_id: string | null
          create_datetime: string | null
          create_user_id: string | null
          update_datetime: string | null
          update_user_id: string | null
        }
        Insert: {
          org_id: string
          org_name: string
          user_id?: string | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
        Update: {
          org_id?: string
          org_name?: string
          user_id?: string | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
      }
      group_mst: {
        Row: {
          group_id: string
          user_id: string | null
          org_id: string | null
          create_datetime: string | null
          create_user_id: string | null
          update_datetime: string | null
          update_user_id: string | null
        }
        Insert: {
          group_id: string
          user_id?: string | null
          org_id?: string | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
        Update: {
          group_id?: string
          user_id?: string | null
          org_id?: string | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
      }
      access_mst: {
        Row: {
          access_id: string
          access_name: string
          group_id: string | null
          permission_read_flg: boolean | null
          permission_update_flg: boolean | null
          invalid_flg: boolean | null
          description: string | null
          create_datetime: string | null
          create_user_id: string | null
          update_datetime: string | null
          update_user_id: string | null
        }
        Insert: {
          access_id: string
          access_name: string
          group_id?: string | null
          permission_read_flg?: boolean | null
          permission_update_flg?: boolean | null
          invalid_flg?: boolean | null
          description?: string | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
        Update: {
          access_id?: string
          access_name?: string
          group_id?: string | null
          permission_read_flg?: boolean | null
          permission_update_flg?: boolean | null
          invalid_flg?: boolean | null
          description?: string | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
      }
      events_data: {
        Row: {
          event_id: string
          access_id: string | null
          title: string | null
          all_day_flg: boolean | null
          start_date: string | null
          start_time: string | null
          end_date: string | null
          end_time: string | null
          description: string | null
          create_datetime: string | null
          create_user_id: string | null
          update_datetime: string | null
          update_user_id: string | null
        }
        Insert: {
          event_id: string
          access_id?: string | null
          title?: string | null
          all_day_flg?: boolean | null
          start_date?: string | null
          start_time?: string | null
          end_date?: string | null
          end_time?: string | null
          description?: string | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
        Update: {
          event_id?: string
          access_id?: string | null
          title?: string | null
          all_day_flg?: boolean | null
          start_date?: string | null
          start_time?: string | null
          end_date?: string | null
          end_time?: string | null
          description?: string | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
      }
      subject_mst: {
        Row: {
          subject_id: string
          subject_name: string
          access_id: string | null
          use_flg: boolean | null
          create_datetime: string | null
          create_user_id: string | null
          update_datetime: string | null
          update_user_id: string | null
        }
        Insert: {
          subject_id: string
          subject_name: string
          access_id?: string | null
          use_flg?: boolean | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
        Update: {
          subject_id?: string
          subject_name?: string
          access_id?: string | null
          use_flg?: boolean | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
      }
      journal_accounts_mst: {
        Row: {
          journal_account_id: string
          journal_account_name: string
          access_id: string | null
          category: string | null
          create_datetime: string | null
          create_user_id: string | null
          update_datetime: string | null
          update_user_id: string | null
        }
        Insert: {
          journal_account_id: string
          journal_account_name: string
          access_id?: string | null
          category?: string | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
        Update: {
          journal_account_id?: string
          journal_account_name?: string
          access_id?: string | null
          category?: string | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
      }
      journal_data: {
        Row: {
          journal_id: string
          journal_description: string | null
          access_id: string | null
          journal_date: string | null
          debit_journal_account_id: string | null
          credit_journal_account_id: string | null
          journal_amount: number | null
          create_datetime: string | null
          create_user_id: string | null
          update_datetime: string | null
          update_user_id: string | null
        }
        Insert: {
          journal_id: string
          journal_description?: string | null
          access_id?: string | null
          journal_date?: string | null
          debit_journal_account_id?: string | null
          credit_journal_account_id?: string | null
          journal_amount?: number | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
        Update: {
          journal_id?: string
          journal_description?: string | null
          access_id?: string | null
          journal_date?: string | null
          debit_journal_account_id?: string | null
          credit_journal_account_id?: string | null
          journal_amount?: number | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
      }
      regular_journal_mst: {
        Row: {
          regular_journal_id: string
          regular_journal_name: string
          access_id: string | null
          frequency: number | null
          day_of_month: number | null
          day_of_weekly: number | null
          day_of_once: string | null
          journal_description: string | null
          journal_date: string | null
          debit_journal_account_id: string | null
          credit_journal_account_id: string | null
          journal_amount: number | null
          amount: number | null
          create_datetime: string | null
          create_user_id: string | null
          update_datetime: string | null
          update_user_id: string | null
        }
        Insert: {
          regular_journal_id: string
          regular_journal_name: string
          access_id?: string | null
          frequency?: number | null
          day_of_month?: number | null
          day_of_weekly?: number | null
          day_of_once?: string | null
          journal_description?: string | null
          journal_date?: string | null
          debit_journal_account_id?: string | null
          credit_journal_account_id?: string | null
          journal_amount?: number | null
          amount?: number | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
        Update: {
          regular_journal_id?: string
          regular_journal_name?: string
          access_id?: string | null
          frequency?: number | null
          day_of_month?: number | null
          day_of_weekly?: number | null
          day_of_once?: string | null
          journal_description?: string | null
          journal_date?: string | null
          debit_journal_account_id?: string | null
          credit_journal_account_id?: string | null
          journal_amount?: number | null
          amount?: number | null
          create_datetime?: string | null
          create_user_id?: string | null
          update_datetime?: string | null
          update_user_id?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}