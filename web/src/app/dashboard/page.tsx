'use client'

import { useAuth } from '@/contexts/AuthContext'

// ビルド時のプリレンダリングを無効化
export const dynamic = 'force-dynamic'
import { AuthGuard } from '@/components/auth/AuthGuard'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  DollarSign, 
  FileText, 
  TrendingUp,
  Plus,
  Clock,
  Users
} from 'lucide-react'

const stats = [
  {
    name: '今日のイベント',
    value: '3',
    icon: Calendar,
    color: 'bg-blue-500',
  },
  {
    name: '今月の収支',
    value: '+¥45,231',
    icon: DollarSign,
    color: 'bg-green-500',
  },
  {
    name: '管理中の科目',
    value: '12',
    icon: FileText,
    color: 'bg-purple-500',
  },
  {
    name: '先月比',
    value: '+12%',
    icon: TrendingUp,
    color: 'bg-orange-500',
  },
]

const recentEvents = [
  {
    id: 1,
    title: '会議',
    time: '10:00 - 11:00',
    date: '今日',
  },
  {
    id: 2,
    title: '医者の予約',
    time: '14:30 - 15:30',
    date: '今日',
  },
  {
    id: 3,
    title: '家族との夕食',
    time: '19:00 - 21:00',
    date: '今日',
  },
]

const recentTransactions = [
  {
    id: 1,
    description: 'スーパーマーケット',
    amount: -3250,
    date: '2025-09-26',
    category: '食費',
  },
  {
    id: 2,
    description: '給与',
    amount: 250000,
    date: '2025-09-25',
    category: '収入',
  },
  {
    id: 3,
    description: '電気代',
    amount: -8500,
    date: '2025-09-24',
    category: '光熱費',
  },
]

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <AuthGuard>
      <Layout>
      <div className="space-y-8">
        {/* ヘッダー */}
        <div className="border-b border-gray-200 pb-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
                ダッシュボード
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                こんにちは、{user?.email}さん
              </p>
            </div>
            <div className="flex gap-3">
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                イベント追加
              </Button>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                仕訳追加
              </Button>
            </div>
          </div>
        </div>

        {/* 概要カード */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:pt-6"
            >
              <div>
                <div className="absolute rounded-md p-3" style={{ backgroundColor: stat.color.replace('bg-', '') }}>
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="ml-16 text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* コンテンツエリア */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* 今日のイベント */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  今日のイベント
                </h3>
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="px-4 py-5 sm:p-6">
              {recentEvents.length > 0 ? (
                <div className="space-y-4">
                  {recentEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{event.title}</p>
                        <p className="text-sm text-gray-500">{event.time}</p>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {event.date}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">今日のイベントはありません</p>
              )}
            </div>
          </div>

          {/* 最近の取引 */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  最近の取引
                </h3>
                <DollarSign className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="px-4 py-5 sm:p-6">
              {recentTransactions.length > 0 ? (
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{transaction.date}</span>
                          <span className="mx-2">•</span>
                          <span>{transaction.category}</span>
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        transaction.amount > 0 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}¥{transaction.amount.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">最近の取引はありません</p>
              )}
            </div>
          </div>
        </div>

        {/* クイックアクション */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              クイックアクション
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              よく使う機能への素早いアクセス
            </p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Button variant="outline" className="h-20 flex-col">
                <Calendar className="h-6 w-6 mb-2" />
                新しいイベント
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <DollarSign className="h-6 w-6 mb-2" />
                収支記録
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <FileText className="h-6 w-6 mb-2" />
                科目作成
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Users className="h-6 w-6 mb-2" />
                グループ管理
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    </AuthGuard>
  )
}