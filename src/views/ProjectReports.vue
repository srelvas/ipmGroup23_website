<template>
    <h1></h1>
    <br>
    <br>
    <div>
        <p class="text-xl font tracking-tight text-black-500 items-center"> 
            Below we show the project's reports of the different project stages so far.
        </p>
    </div>
    <br>
    <div class="h-screen flex overflow-hidden bg-white">
        <div class="hidden lg:flex lg:flex-shrink-0">
        <div class="flex flex-col w-64">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div
            class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100"
            >
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <nav class="mt-5 flex-1" aria-label="Sidebar">
                <div class="px-2 space-y-1">
                    <button
                    @click="changeWindow(report)"
                    v-for="report in reports"
                    :key="report.name"
                    :class="[
                        report.current
                        ? 'bg-gray-200 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                    ]"
                    >
                    <component
                        :is="report.icon"
                        :class="[
                        report.current
                            ? 'text-orange'
                            : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 h-6 w-6',
                        ]"
                        aria-hidden="true"
                    />
                    {{ report.name }}
                    <!-- <button type="button" class="mr-3 h-6 w-6" >
                                <a href="/lec2-2122.pdf" download>
                                    <DownloadIcon/>
                                </a>
                            </button> -->
                    </button>
                </div>
                </nav>
            </div>
            </div>
        </div>
        </div>
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
            <!-- <div class="lg:hidden"> -->
                <div class="row-container">
                    <div class="proj">
                        <iframe
                        :src="currentReportUrl"
                        height="100%"
                        width="100%"
                        style="position:relative; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"
                        ></iframe>
                    </div>
                </div>
            <!-- </div> -->
        </div>
    </div>
                
</template>
<script>
import { ref } from "vue";
import {
  ClipboardListIcon,
} from "@heroicons/vue/outline";

const reports =[
    {
        name:"stage 1",
        icon: ClipboardListIcon,
        current: true,
        url: "http://www.keepandshare.com/doc11/view.php?id=33690&da=y"
    },
    {
        name:"stage 2",
        icon: ClipboardListIcon,
        current: false,
        url: "https://www.keepandshare.com/doc11/33689/g-23-stage2-pdf-277k?da=y"
    },
    {
        name:"stage 3",
        icon: ClipboardListIcon,
        current: false,
        url: "https://www.keepandshare.com/doc11/33688/g-23-stage3-pdf-1-8-meg?da=y"
    },
]
export default{
    data: function(){
        return {
            currentReport: reports[0].name,
            currentReportUrl: reports[0].url,
        }
    },
    setup() {
    const sidebarOpen = ref(false);

    return {
      sidebarOpen, reports
    };
  },
  methods: {
    changeWindow(report) {
      reports.forEach((rep) => (rep.current = false));
      report.current = true;
      this.currentReport = report.name;
      this.currentReportUrl = report.url;
      this.$forceUpdate();
    },
  },
  mounted() {
    let auxReport=reports[0];
    this.changeWindow(auxReport);
  },
}
</script>

<style scoped>

    body, html {
        width: 100%; height: 100%; margin: 0; padding: 0
    }

    .row-container {
        display: flex; 
        width: 100%; 
        height: 100%; 
        flex-direction: column; 
        overflow: hidden;
        padding: 10;
    }

    /* .first-row {
        background-color: lime; 
    } */

    .proj { 
        flex-grow: 1; border: none; margin: 0; padding: 0; 
        height:100vh;
    }

    /* #q-app {
    height:100vh;
    display:flex;
    }
    .q-pa-md{
    flex:1;
    display:flex;
    flex-direction:column;
    } */
</style>
