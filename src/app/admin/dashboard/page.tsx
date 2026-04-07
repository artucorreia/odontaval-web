import { AppMainContainer } from "@/themes/components";
import { DashboardCharts } from "./DashboardCharts";

export default function DashboardPage() {
    return (
       <AppMainContainer title="Dashboard">
           <div className="flex flex-col gap-4">
               <div>
                   <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Visão Geral</h1>
                   <p className="text-sm text-gray-500 dark:text-gray-400">Acompanhe as principais métricas do sistema.</p>
               </div>
               
               <DashboardCharts />
           </div>
       </AppMainContainer>
    )
}