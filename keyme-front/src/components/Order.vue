<template>
  <div class="container">
    <div class="header mt-3 font-bold">
      <div class="w-full text-center">
        <h1
          class="sm:text-3xl md:text-3xl lg:text-6xl xl:text-6xl text-orange leading-tight"
        >
          Part of Your Order Needs to Be<br />Made at KeyMe Headquarters
        </h1>
      </div>
    </div>
    <div class="sub-header mt-6 font-bold">
      <div class="w-full text-center">
        <h1 class="sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl text-gray">
          &mdash;&mdash; And will ship for FREE in discreet packaging
          &mdash;&mdash;
        </h1>
      </div>
    </div>
    <div class="content mt-10 flex justify-center">
      <form class="w-3/4">
        <div class="flex flex-wrap -mx-3 mb-1">
          <div class="w-full px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray border-2 border-gray py-6 px-6 mb-3 leading-tight focus:outline-none focus:bg-white text-3xl"
              :class="{
                'is-invalid': submitStatus && $v.formData.fullName.$error
              }"
              type="text"
              id="fullname"
              name="fullname"
              v-model="formData.fullName"
              placeholder="FULL NAME"
            />
            <div
              v-if="submitStatus && !$v.formData.fullName.required"
              class="text-red font-semibold mx-1 my-2"
            >
              *Full Name is required
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-1">
          <div class="lg:w-7/12 md:w-7/12 sm:w-full px-3 mb-6 ml-16 md:mb-0">
            <input
              :class="{
                'is-invalid': submitStatus && $v.formData.address.$error
              }"
              class="appearance-none block w-full bg-gray-200 text-gray border-2 border-gray py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-2xl"
              id="address"
              name="address"
              v-model="formData.address"
              type="text"
              placeholder="STREET ADDRESS"
            />
            <div
              v-if="submitStatus && !$v.formData.address.required"
              class="text-red font-semibold mx-1 my-2"
            >
              *Street address is required
            </div>
          </div>
          <div class="lg:w-3/12 md:w-3/12 sm:w-full px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray border-2 border-gray py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-2xl"
              id="aptNum"
              name="aptNum"
              type="text"
              placeholder="APT #"
              v-model="formData.aptNum"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="lg:w-4/12 md:w-4/12 sm:w-full px-3 mb-6 ml-16 md:mb-0">
            <input
              :class="{
                'is-invalid': submitStatus && $v.formData.city.$error
              }"
              class="appearance-none block w-full bg-gray-200 text-gray border-2 border-gray py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-2xl"
              id="city"
              name="city"
              type="text"
              placeholder="NEW YORK"
              v-model="formData.city"
            />
            <div
              v-if="submitStatus && !$v.formData.city.required"
              class="text-red font-semibold mx-1 my-2"
            >
              *City is required
            </div>
          </div>
          <div class="w-full md:w-3/12 px-3 mb-6 md:mb-0">
            <div class="relative">
              <input
                :class="{
                  'is-invalid': submitStatus && $v.formData.state.$error
                }"
                class="appearance-none block w-full bg-gray-200 text-gray border-2 border-gray py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-2xl"
                id="state"
                name="state"
                type="text"
                placeholder="STATE"
                v-model="formData.state"
              />
              <div
                v-if="submitStatus && !$v.formData.state.required"
                class="text-red font-semibold mx-1 my-2"
              >
                *State is required
              </div>
            </div>
          </div>
          <div class="w-full md:w-3/12 px-3 mb-6 md:mb-0">
            <input
              :class="{
                'is-invalid': submitStatus && $v.formData.zip.$error
              }"
              class="appearance-none block w-full bg-gray-200 text-gray border-2 border-gray py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-2xl"
              id="zip"
              name="zip"
              type="text"
              placeholder="ZIP"
              v-model="formData.zip"
            />
            <div
              v-if="submitStatus && !$v.formData.zip.required"
              class="text-red font-semibold mx-1 my-2"
            >
              *Zipcode is required
            </div>
            <div
              v-if="
                submitStatus &&
                  $v.formData.zip.required &&
                  !$v.formData.zip.validZip
              "
              class="text-red font-semibold mx-1 my-2"
            >
              *Invalid zip code format
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-1">
          <div class="lg:w-10/12 md:w-10/12 sm:w-full px-3 mb-6 ml-16 md:mb-0">
            <input
              :class="{
                'is-invalid': submitStatus && $v.formData.email.$error
              }"
              class="appearance-none block w-full bg-gray-200 text-gray border-2 border-gray py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-2xl"
              id="email"
              name="email"
              type="text"
              placeholder="Email Address"
              v-model="formData.email"
            />
            <div
              v-if="submitStatus && !$v.formData.email.required"
              class="text-red font-semibold mx-1 my-2"
            >
              *Email address is required
            </div>
            <div
              v-if="
                submitStatus &&
                  $v.formData.email.required &&
                  !$v.formData.email.email
              "
              class="text-red font-semibold mx-1 my-2"
            >
              *Invalid Email address format
            </div>
          </div>
        </div>
        <div class="flex flex-wrap mb-1 w-full">
          <div class="px-3 mb-6 ml-16 md:mb-0 text-center">
            <p class="text-xl italic text-gray">
              We will only send you information regarding your order and KeyMe
              services <br />and promotions. We will never share your
              information with a third party
            </p>
          </div>
        </div>
        <div class="flex flex-wrap mt-12 w-full justify-center">
          <div class="px-3 md:mb-0">
            <button
              type="submit"
              @click.prevent="handleForm"
              class="rounded-lg bg-orange text-white font-bold text-4xl px-32 py-2"
            >
              Continue
            </button>
          </div>
        </div>
        <div class="flex flex-wrap mb-8 mt-8 w-full justify-center">
          <div class="px-3 md:mb-0">
            <button
              @click="editOrder"
              class="rounded-lg bg-white text-blue font-bold text-3xl px-32 py-2"
            >
              EDIT ORDER
            </button>
          </div>
        </div>
      </form>
    </div>
    <t-modal
      wrapper-class="border-red bg-white text-darkgray rounded shadow-xl flex flex-col"
      headerClass="text-center text-orange font-semibold text-3xl my-6"
      overlay-class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-gray opacity-75"
      body-class="text-xl flex flex-col items-center justify-center text-center p-6 flex-grow"
      footerClass="bg-blue p-3 flex justify-center"
      show
      ref="confirmModal"
    >
      <template v-slot:header>
        <h1>Confirm your shipping details</h1>
      </template>
      <h1 class="text-xl font-semibold">Full Name:</h1>
      <p>
        {{ formData.fullName }}
      </p>
      <br />
      <h1 class="text-xl font-semibold">Shipping Address:</h1>
      <p>
        {{ formData.address }} {{ formData.aptNum }}<br />{{ formData.city }}
        {{ formData.state }} {{ formData.zip }}
      </p>
      <br />
      <h1 class="text-xl font-semibold">Email Address:</h1>
      <p>
        {{ formData.email }}
      </p>
      <template v-slot:footer>
        <t-button
          variant="danger"
          class="mr-24"
          @click="$refs.confirmModal.hide()"
        >
          Edit Details
        </t-button>
        <t-button
          @click="
            $refs.confirmModal.hide();
            submitOrder();
          "
          variant="success"
        >
          Confirm Order
        </t-button>
      </template>
    </t-modal>
    <div
      v-if="success"
      class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 fixed alert rounded relative mt-4"
      role="alert"
    >
      <strong class="font-bold">Success! </strong>
      <span class="block sm:inline">Your order has been confirmed.</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          class="fill-current h-6 w-6 text-green-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "order",
  data() {
    return {
      formData: {
        fullName: "",
        address: "",
        aptNum: "",
        city: "",
        state: "",
        zip: null,
        email: ""
      },
      submitStatus: false,
      success: false
    };
  },

  validations: {
    formData: {
      fullName: {
        required
      },
      address: {
        required
      },
      city: {
        required
      },
      state: {
        required
      },
      zip: {
        required,
        validZip: zip => {
          return /^\d{5}(?:[-\s]\d{4})?$/.test(zip);
        }
      },
      email: {
        required,
        email
      }
    }
  },

  methods: {
    editOrder() {
      this.$router.push({ name: "products" });
    },

    handleForm() {
      this.submitStatus = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$refs.confirmModal.show();
    },

    submitOrder() {
      this.success = true;
      this.$store.dispatch("resetState");
      setTimeout(() => {
        this.$router.push({ name: "products" });
      }, 3000);
    }
  }
};
</script>

<style scoped>
.is-invalid {
  border: 1px solid red;
}
.alert {
  bottom: 150px;
}
</style>
