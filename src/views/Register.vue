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
                            
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small></small>
                            </div>
                            <form>
                                <base-input alternative
                                            placeholder="이메일"
                                            v-model="email"
                                            @blur="emailValidCheck()"
                                            addon-left-icon="ni">
                                </base-input>
                                <div class="text-muted font-italic" v-if="!emailValidCheckFlag"> 
                                    <small class="color-red">이메일 형식으로 입력해주세요.</small>
                                </div>
                                <base-input alternative
                                            type="password"
                                            placeholder="비밀번호"
                                            v-model="password"
                                            @blur="passwordValid"
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
                                            @blur="nicknameNullCheck()"
                                            addon-left-icon="ni">
                                </base-input>
                                <div class="text-muted font-italic" v-if="!nicknameNullCheckFlag"> 
                                    <small class="color-red">닉네임 입력해주세요.</small>
                                </div>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="휴대폰 번호"
                                            v-model="phone"
                                            addon-left-icon="ni ni-phone-3">
                                </base-input>
                                <base-checkbox>
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
        }
    },
    methods: {
        emailValidCheck() {
            //이메일 유효성을 검사한다.
	        if (/.+@.+\..+/.test(this.email)) {
	        	//유효성이 틀리다면 data 값을 false로 한다.
                this.emailValidCheckFlag = true;
	        	return;
	        } else {
	        	this.emailValidCheckFlag = false;
	        }
    
            //이메일 중복체크를 한다.
	        // const response = await checkDuplicateEmail(this.email);
	        // if (!response.data) {
	        // 	this.availableEmail = false;
	        // } else {
	        // 	this.availableEmail = true;
	        // }
        },
        nicknameNullCheck() {
            if (this.nickname == null) {
                this.nicknameNullCheckFlag = false;
            } else {
                this.nicknameNullCheckFlag =true
            }
        },
        passwordValid () {
          if (/^(?=.*[a-z])(?=.*[0-9]).{8,16}$/.test(this.password)) {
            this.passwordValidFlag = true
          } else {
            this.passwordValidFlag = false
          }
        },
        passwordCheckValid() {
            if(this.password === this.password_confirmation) {
                this.passwordCheckFlag = true
            } else {
                this.passwordCheckFlag = false
            }
        },
        postData() {
            if (this.email != null && this.password != null && this.password_confirmation != null && this.nickname != null &&
            this.passwordValidFlag == true && this.passwordCheckFlag == true) {
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
