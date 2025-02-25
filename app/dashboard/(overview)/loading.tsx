import DashboardSkeleton from '@/app/ui/skeletons';

// 此文件可以被创建在 app/dashboard/loading.tsx 路径下 此时将作用语此路径加的子路径的所有页面
// 在此文仅路径下时针对浏览器访问 /dashboard  整个概览页面
export default function Loading() {
    return <div>loading...</div>
    return <DashboardSkeleton />;
}