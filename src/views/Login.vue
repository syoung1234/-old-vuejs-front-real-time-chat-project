<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="text-center mb-3">
            <h5 class="color-white">로그인</h5>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <!-- <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template> -->
                        <template>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            v-model="email"
                                            placeholder="이메일">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            v-model="password"
                                            placeholder="비밀번호">
                                </base-input>
                                <!-- <base-checkbox>
                                    Remember me
                                </base-checkbox> -->
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @click="postData">로그인</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="" class="text-light">
                                <small>비밀번호 찾기</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="/register" class="text-light">
                                <small>회원가입</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
const axiosConfig = {
        headers:{
            "Content-Type": "application/json"
        }
    }
export default {
    data() {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
        postData() {
            let saveData = {};
            saveData.email = this.email;
            saveData.password = this.password;

            if (this.email == null || this.password == null) {
                alert("이메일 또는 비밀번호를 입력해주세요.")
                return
            }

            this.$axios
            .post("/api/login", JSON.stringify(saveData), axiosConfig)
            .then((res) => {
                console.log(res)
              if (res.data == "success") {
                  this.$router.push("/");
              }
            })
            .catch((error) => {
              alert("이메일 또는 비밀번호를 맞지 않습니다.")
            })
        }
    }
    
};
</script>
<style>
</style>
