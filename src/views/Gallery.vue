<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <v-carousel height="650" class="mt-2" :cycle="false">
                    <v-carousel-item v-for="(pic, index) in pictures"
                        :src="pic.src"
                        :key="index">
                    <v-btn flat @click.native.stop="dialog = !dialog" v-on:click="openDialog(index)">
                        <v-icon x-large>info</v-icon>
                    </v-btn>
                    </v-carousel-item>
                    <v-dialog dark v-model="dialog">
                        <v-card v-model="info">
                            <v-img :src="info.src" aspect-ratio="1">
                            </v-img>
                             <v-card-title primary-title>
                                <div>
                                    <h1 class="headline mb-0">{{ info.title }}</h1>                           
                                </div>
                            </v-card-title>  
                            <v-card-title>
                               <div>
                                    <h3>Stroming</h3>                           
                                </div>
                            </v-card-title> 
                            <v-card-text>
                                {{ text }}
                            </v-card-text>
                            <v-card-title>
                               <div>
                                    <h3>Beschrijving</h3>                           
                                </div>
                            </v-card-title>
                            <v-card-text>
                                {{ text }}
                            </v-card-text>
                            <v-card-title>
                                <div>
                                    <h3>Over deze artiest</h3>                           
                                </div>
                            </v-card-title>
                            <v-card-text>
                                {{ text }}
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="orange" flat @click="chosePicture(info)">Cast picture</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            pictures: [
                {src: 'https://firebasestorage.googleapis.com/v0/b/oneframe-ce302.appspot.com/o/stas%2Fstas1.jpg?alt=media&token=b4613366-0aba-407e-a10c-d5b9c07e302f', id:1, title:'Stas is kostuum'},
                {src: 'https://firebasestorage.googleapis.com/v0/b/oneframe-ce302.appspot.com/o/stas%2Fstas2.jpg?alt=media&token=f5ec874c-4db2-45f5-8b43-fa1b3e4adfdd', id:2, title:'Stas op TD'},
                {src: 'https://firebasestorage.googleapis.com/v0/b/oneframe-ce302.appspot.com/o/stas%2Fstas3.jpg?alt=media&token=364e6708-26a2-4659-84ca-61811556d91b', id:3, title:'Stas viert Halloween'}
            ],
            text: "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.",
            dialog: false,
            info: []
            
        }
    },
    methods: {
        showInfo(picId){
            alert(this.pictures[picId].title);
        },
        openDialog(index){
            this.info = this.pictures[index]
        },
        chosePicture(picture){
            this.$store.dispatch('setDisplayedImage', picture);
        }
    }
}

</script>
<style scoped>
    .title {
        position: absolute;
        bottom: 100px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 4em;
    }
</style>