<template>
    <v-container ma-0 pa-0 fluid>
        <v-layout row wrap justify-center>

            <v-flex>
                <v-container ma-0 pa-0 fluid>
                    <v-layout justify-center align-center>
                        <router-link to="/frontend">
                        <DoughnutChart
                            :percent="90"
                            foregroundColor='#333333'
                            backgroundColor='#cccccc'
                            :strokeWidth="5"
                            :visibleValue="true"
                            :width='150'
                            :height='150'
                        />
                        </router-link>
                    </v-layout>
                    <p class="text-xs-center">Frontend Development</p>
                </v-container>
            </v-flex>

            <v-flex>
                <v-container ma-0 pa-0 fluid>
                    <v-layout justify-center align-center>
                        <router-link to="/uxdesign">
                        <DoughnutChart
                            :percent="80"
                            foregroundColor='#333333'
                            backgroundColor='#cccccc'
                            :strokeWidth="5"
                            :visibleValue="true"
                            :width='150'
                            :height='150'
                        />
                        </router-link>
                    </v-layout>
                    <p class="text-xs-center">UX Design</p>
                </v-container>
            </v-flex>

            <v-flex>
                <v-container ma-0 pa-0 fluid>
                    <v-layout justify-center align-center>
                        <router-link to="/sysadmin">
                        <DoughnutChart
                            :percent="70"
                            foregroundColor='#333333'
                            backgroundColor='#cccccc'
                            :strokeWidth="5"
                            :visibleValue="true"
                            :width='150'
                            :height='150'
                        />
                        </router-link>
                    </v-layout>
                    <p class="text-xs-center">System Administrator</p>
                </v-container>
            </v-flex>

            <v-flex>
                <v-container ma-0 pa-0 fluid>
                    <v-layout justify-center align-center>
                        <DoughnutChart
                            :percent="60"
                            foregroundColor='#333333'
                            backgroundColor='#cccccc'
                            :strokeWidth="5"
                            :visibleValue="true"
                            :width='150'
                            :height='150'
                        />
                    </v-layout>
                    <p class="text-xs-center">E-sports and Memes :)</p>
                </v-container>
            </v-flex>

        </v-layout>
    </v-container>
</template>
<script>
import DoughnutChart from 'vue-doughnut-chart'

export default {
    components: {
        DoughnutChart
    }
}
</script>
