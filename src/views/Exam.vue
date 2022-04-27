<template>
    <div>
        <el-button type="primary" style="margin-left:20px" @click="dbOption()">查看/修改数据库</el-button>
        <h1>正在考试</h1>
        <p>
          <span><i class="el-icon-time"></i>考试时间&nbsp;:&nbsp;{{ paperDetails.createDate }}</span>&nbsp;&nbsp;&nbsp;
          <span><i class="el-icon-tickets"></i>考试科目&nbsp;:&nbsp;{{ paperDetails.courseName }}</span>&nbsp;&nbsp;&nbsp;
          <span><i class="el-icon-collection-tag"></i>考试分数&nbsp;:&nbsp;{{ paperDetails.score }}分</span>
        </p>
        <p><strong style="font-size: 17px">一、单项选择题，每题5分，共4题，总分20分。<span style="color: red">(只有一个正确答案)</span></strong>
        
        <!-- <div>
            <p style="font-size: 15px"><span style="color: blue;font-size: 15px">第
              1题：</span>计算机网络最基本的功能</p>
            <p><el-radio v-model="radio" label="1">备选项</el-radio></p>
            <p><el-radio v-model="radio" label="2">备选项</el-radio></p>

        </div> -->
        <div v-for="(item,index) in form" v-bind:key="index">
            <!-- 题目 -->
            <el-row>
                <br>
                <span style="color: blue;font-size: 15px;">第
              {{index+1}}题：</span>{{item.value.question}}
              <br>
            </el-row>
            <el-row>
            <div v-for="(item2,index2) in item.value.option" v-bind:key="index2">
                <!-- 选项 -->
                <br>
                <el-radio style="float:left" v-model="item.select" :label=item2.value>{{item2.value}}&nbsp;、{{item2.label}}&nbsp;</el-radio>
                <br>
                <!-- <div v-for="(value1) in item2.option.value" v-bind:key="value1">
                    <p><el-radio v-model="option.value" label="1">value1</el-radio></p>
                </div> -->
                
                <!-- <p><el-radio v-model="radio" label="2">备选项</el-radio></p> -->

            </div>
            </el-row>
        </div>

        <p><strong style="font-size: 17px">二、多项选择题，每题10分，共2题，总分20分。<span style="color: red">(正确答案可能不止一个)</span></strong></p>
        <div v-for="(item,index) in formMul" v-bind:key="index">
        <el-row>
                <br>
                <span style="color: blue;font-size: 15px;">第
              {{index+1}}题：</span>{{item.value.question}}
              <br><br>
            </el-row>
            <el-row>
                <!-- <el-checkbox v-model="checked">备选项</el-checkbox> -->
            <el-checkbox-group  v-model="item.value.select" >
                <!-- <el-checkbox style="float:left"  >hhhhh&nbsp;</el-checkbox> -->
                 <!-- <br><el-checkbox style="float:left" :label=item.value.option[0].label>A、</el-checkbox><br>
                <br><el-checkbox style="float:left" :label=item.value.option[1].label>B、</el-checkbox><br>
                 <br><el-checkbox style="float:left" :label=item.value.option[2].label>C、</el-checkbox><br>
                 <br><el-checkbox style="float:left" :label=item.value.option[3].label>D、</el-checkbox><br> -->
                 <br><br>
                 <br>
                 <el-checkbox style="float:left" v-for="(item2,index2) in item.value.option" :label="item2.value" v-bind:key="index2">&nbsp;{{item2.value}}、{{item2.label}}&nbsp;</el-checkbox>
                <br>
                <br>
                <!-- <el-checkbox style="float:left" label="复选框 A"></el-checkbox>
                <br>
                <el-checkbox style="float:left" label="复选框 B"></el-checkbox>
                <el-checkbox style="float:left" label="复选框 C"></el-checkbox>
                <el-checkbox style="float:left" label="禁用" disabled></el-checkbox>
                <el-checkbox style="float:left" label="选中且禁用"></el-checkbox> -->
            </el-checkbox-group>
            </el-row>
        </div>
        <br><br><br>
            <el-button type="primary" style="margin-left:20px" @click="submit()">提交</el-button>
    </div>
    
</template>

<script>
export default {
    name:'Exam',
    data(){
        return{
            userType:'',//用户类型，用来区分权限
            singleValue:5,//单选题分值
            mulValue:10,//多选题分值
            checked:true,
            score:0,
            checkList: ['选中且禁用','复选框 A'],
            paperDetails:{
                createDate:'2022-4-26 08:30',
                courseName:'计算机网络',
                score:' '
            },
            radio: '',
            form:[
                {
                    index:0,
                    value:{
                        question:'计算机网络最基本的功能（ ）',
                        option:[{
                            label:'数据通信',
                            value:'A',
                        },{
                            label:'资源共享',
                            value:'B'
                        },{
                            label:'分布式处理',
                            value:'C'
                        },{
                            label:'信息综合处理',
                            value:'D'
                        }],
                        select:'',
                        answer:'A'
                    }
                },
                {
                    index:1,
                    value:{
                        question:'下列不属于计算机网络最基本的功能（ ）',
                        option:[{
                            label:'提高系统高可靠性',
                            value:'A',
                        },{
                            label:'提高工作效率',
                            value:'B'
                        },{
                            label:'分散数据的综合处理',
                            value:'C'
                        },{
                            label:'使各计算机相对独立',
                            value:'D'
                        }],
                        select:'',
                        answer:'D'
                    }
                },
                {
                    index:2,
                    value:{
                        question:'计算机网络系统的基本组成是（ ）',
                        option:[{
                            label:'局域网和广域网',
                            value:'A',
                        },{
                            label:'本地计算机网和通信网',
                            value:'B'
                        },{
                            label:'通信子网和资源子网',
                            value:'C'
                        },{
                            label:'服务器和工作站',
                            value:'D'
                        }],
                        select:'',
                        answer:'C'
                    }
                },
                {
                    index:3,
                    value:{
                        question:'在计算机网络中可以没有的是（ ）',
                        option:[{
                            label:'客户机',
                            value:'A',
                        },{
                            label:'服务器',
                            value:'B'
                        },{
                            label:'操作系统',
                            value:'C'
                        },{
                            label:'数据库管理系统',
                            value:'D'
                        }],
                        select:'',
                        answer:'D'
                    }
                },
            ],
            singleList:[{
                index:1,
                value:{
                    question:{
                        content:"11111"
                    },
                    answerList:[{
                        index2:0,
                        value2:'111'
                    }]
                }
            },{

            }],
            formMul:[{
                index:0,
                    value:{
                        question:'计算机网络分为通信子网和资源子网，下列属于通信子网的是（ ）',
                        option:[{
                            label:'网桥',
                            value:'A',
                        },{
                            label:'交换机',
                            value:'B'
                        },{
                            label:'计算机软件',
                            value:'C'
                        },{
                            label:'路由器',
                            value:'D'
                        }],
                        select:[],
                        answer:['A','B','D']
                    }
            },
            {
                index:1,
                    value:{
                        question:'下列关于广播式网络的说法中，错误的是（ ）',
                        option:[{
                            label:'共享广播信道',
                            value:'A',
                        },{
                            label:'不存在路由选择问题',
                            value:'B'
                        },{
                            label:'可以不要网络层',
                            value:'C'
                        },{
                            label:'不需要服务访问点',
                            value:'D'
                        }],
                        select:[],
                        answer:['D']
                    }
            }]
        }
    },
    methods: {
        //提交并计算分数
        
        submit(){
            console.log(this.form);
            //计算单选题得分
            for(let i=0;i<this.form.length;i++){
                console.log(this.form[i])
                if(this.form[i].value.select===this.form[i].value.answer){
                    this.score=this.score+this.singleValue;
                    console.log('第'+i+'题正确')
                }
            }
            //计算多选题得分
            for(let i = 0; i < this.formMul.length; i++){
                console.log(this.formMul[i])
                if(this.formMul[i].value.select===this.formMul[i].value.answer){
                    this.score=this.score+this.mulValue
                }
            }
            alert('总得分:'+this.score)
            this.paperDetails.score=this.score
            this.$router.push({
                name:'Login'
            })
        },
        dbOption(){
            console.log(this.$route.params.type)
            this.$router.push({
                name:'Database',
                params:{type:this.$route.params.type}//传入用户权限
            })
        }
    },
}
</script>
<style scoped>

</style>
<style lang="scss">
div{
    // float:left;
    display: block;
    text-align: left;
}

 :deep .el-radio{
        display: inline block;
        line-height: 23px;
        white-space: normal;
        margin-right: 0;
        // display: inline-block;
    }
:deep .el-checkbox{
    display: inline block;
    line-height: 23px;
    float:left;
    white-space: normal;
    margin-right: 0;
}
:deep .el-checkbox__label{
    display: inline block;
    line-height: 23px;
    float:left;
    white-space: normal;
    margin-right: 0;
}
</style>