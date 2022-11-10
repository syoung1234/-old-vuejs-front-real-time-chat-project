<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <h5>회원가입</h5>
                            </div>
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
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="이메일"
                                            addon-left-icon="ni">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="비밀번호"
                                            addon-left-icon="ni">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="비밀번호 확인"
                                            addon-left-icon="ni">
                                </base-input>
                                <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="닉네임"
                                            addon-left-icon="ni">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="휴대폰 번호"
                                            addon-left-icon="ni ni-phone-3">
                                </base-input>
                                <base-checkbox>
                                    <span>
                                    <a href="">Privacy Policy</a>
                                        서비스 약관에 동의합니다.
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">가입하기</base-button>
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
export default {};
</script>
<style>
</style>
