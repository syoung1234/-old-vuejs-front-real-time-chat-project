<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="text-center mb-3">
            <h5 class="color-white">회원가입</h5>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            
                            <!-- <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div> -->
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small></small>
                            </div>
                            <form>
                                <base-input alternative
                                            placeholder="이메일"
                                            v-model="email"
                                            @blur="emailValidCheck(), checkDuplicate('email')"
                                            addon-left-icon="ni">
                                </base-input>
                                <div class="text-muted font-italic" v-if="!emailValidCheckFlag"> 
                                    <small class="color-red">이메일 형식으로 입력해주세요.</small>
                                </div>
                                <div class="text-muted font-italic" v-else-if="emailDuplicateFlag === false"> 
                                    <small class="color-red">이미 사용 중인 이메일입니다.</small>
                                </div>
                                <div class="text-muted font-italic" v-else-if="emailDuplicateFlag === true"> 
                                    <small class="color-green">사용 가능한 이메일입니다.</small>
                                </div>
                                <base-input alternative
                                            type="password"
                                            placeholder="비밀번호"
                                            v-model="password"
                                            @blur="passwordValid(), passwordCheckValid()"
                                            addon-left-icon="ni">
                                </base-input>
                                <div class="text-muted font-italic" v-if="!passwordValidFlag"> 
                                    <small class="color-red">8~16자 영문, 숫자를 사용하세요.</small>
                                </div>
                                <base-input alternative
                                            type="password"
                                            placeholder="비밀번호 확인"
                                            v-model="password_confirmation"
                                            @blur="passwordCheckValid"
                                            addon-left-icon="ni">
                                </base-input>
                                <div class="text-muted font-italic" v-if="!passwordCheckFlag">
                                    <small class="color-red">비밀번호가 일치하지 않습니다.</small>
                                </div>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="닉네임"
                                            v-model="nickname"
                                            @blur="nicknameNullCheck(), checkDuplicate('nickname')"
                                            addon-left-icon="ni">
                                </base-input>
                                <div class="text-muted font-italic" v-if="!nicknameNullCheckFlag"> 
                                    <small class="color-red">닉네임 입력해주세요.</small>
                                </div>
                                <div class="text-muted font-italic" v-else-if="nicknameDuplicateFlag === false"> 
                                    <small class="color-red">이미 사용 중인 닉네임입니다.</small>
                                </div>
                                <div class="text-muted font-italic" v-else-if="nicknameDuplicateFlag === true"> 
                                    <small class="color-green">사용 가능한 닉네임입니다.</small>
                                </div>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="휴대폰 번호"
                                            v-model="phone"
                                            addon-left-icon="ni ni-phone-3">
                                </base-input>
                                <base-checkbox v-model="policyCheck">
                                    <span>
                                    <a href="">Privacy Policy</a>
                                        서비스 약관에 동의합니다.
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" v-on:click="postData">가입하기</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
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
            nickname: null,
            password: null,
            password_confirmation: null,
            phone: null,
            passwordValidFlag: true,
            passwordCheckFlag: true,
            nicknameNullCheckFlag: true,
            emailValidCheckFlag: true,
            emailDuplicateFlag: '',
            nicknameDuplicateFlag: '',
            policyCheck: false,
        }
    },
    methods: {
        // 중복체크 (이메일, 닉네임)
        checkDuplicate(key) {
            let data = {};
            let type = null;
            data.email = this.email;
            data.nickname = this.nickname;
            let result = null;

            if (key == "email") {
                type = this.email;
            } else if (key == "nickname") {
                type = this.nickname;
            }
            if (type != null) {
                this.$axios
                .post(`/api/duplicate/${key}`, data, axiosConfig)
                .then((res) => {
                    if (res.data == "exist") {
                        result = false;
                    } else {
                        result = true;
                    }

                    if (key == "email") {
                        this.emailDuplicateFlag = result;
                    } else if (key == "nickname") {
                        this.nicknameDuplicateFlag = result;
                    }
                      
                })
                .catch((error) => {
                  console.log(error);
                })
            }
            
        },
        // 이메일 유효성
        emailValidCheck() {
	        if (/.+@.+\..+/.test(this.email)) {
	        	//유효성이 틀리다면 data 값을 false로 한다.
                this.emailValidCheckFlag = true;
	        } else {
	        	this.emailValidCheckFlag = false;
	        }
        },
        // 닉네임 null 체크
        nicknameNullCheck() {
            if (this.nickname == null) {
                this.nicknameNullCheckFlag = false;
            } else {
                this.nicknameNullCheckFlag =true
            }
        },
        // 비밀번호 유효성
        passwordValid () {
          if (/^(?=.*[a-z])(?=.*[0-9]).{8,16}$/.test(this.password)) {
            this.passwordValidFlag = true
          } else {
            this.passwordValidFlag = false
          }
        },
        // 비밀번호 확인
        passwordCheckValid() {
            if(this.password === this.password_confirmation) {
                this.passwordCheckFlag = true
            } else {
                this.passwordCheckFlag = false
            }
        },
        // 회원가입 전송
        postData() {
            if (this.email != null && this.password != null && this.password_confirmation != null && this.nickname != null &&
            this.passwordValidFlag == true && this.passwordCheckFlag == true && this.policyCheck == true) {
                let saveData = {};
                saveData.email = this.email;
                saveData.password = this.password;
                saveData.nickname= this.nickname;
                saveData.phone = this.phone;

                this.$axios
                .post("/api/register", JSON.stringify(saveData), axiosConfig)
                .then((res) => {
                  if (res.data == "success") {
                      this.$router.push("/");
                  }
                })
                .catch((error) => {
                  console.log(error);
                })
                .finally(() => {
                });
            }
        },
  },
};
</script>
<style>
</style>
