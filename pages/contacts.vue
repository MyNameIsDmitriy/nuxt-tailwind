<template>
  <div class="max-w-[1374px] px-[15px] mx-auto mt-[88px]">
    <div
      class="flex max-950:flex-col justify-between max-950:items-center max-1250:justify-around mb-[112px] font-primary text-primary"
    >
      <div class="max-w-[440px] max-950:mb-[32px]">
        <div class="mb-[60px]">
          <h1 class="text-[40px] leading-[53px] font-medium mb-[16px]">
            Задать вопрос
          </h1>
          <p class="text-base leading-[21px] font-light">
            Менеджеры компании с&#160;радостью ответят на&#160;ваши вопросы,
            произведут расчет стоимости услуг и&#160;подготовят индивидуальное
            коммерческое предложение.
          </p>
        </div>
        <div>
          <div class="text-2xl font-light [&>*]:mb-[16px] last:[&>p]:mb-[32px]">
            <div>
              <p><b>Адрес</b>: РБ, г.&#160;Гродно,</p>
              <p>ул.&#160;Гаспадарчая, 21А, оф.&#160;107, 230005</p>
            </div>
            <p><b>Телефон</b>: +375292929292</p>
            <p><b>e-mail</b>: info.mitech@yandex.com</p>
          </div>

          <div>
            <div style="position: relative; overflow: hidden">
              <a
                href="https://yandex.by/maps/org/mitech_/100614216891/?utm_medium=mapframe&utm_source=maps"
                style="
                  color: #eee;
                  font-size: 12px;
                  position: absolute;
                  top: 0px;
                "
                >MITech, ЭмАйТех</a
              ><a
                href="https://yandex.by/maps/10274/grodno/category/it_company/184106174/?utm_medium=mapframe&utm_source=maps"
                style="
                  color: #eee;
                  font-size: 12px;
                  position: absolute;
                  top: 14px;
                "
                >IT-компания в Гродно</a
              ><a
                href="https://yandex.by/maps/10274/grodno/category/logistics_company/184108185/?utm_medium=mapframe&utm_source=maps"
                style="
                  color: #eee;
                  font-size: 12px;
                  position: absolute;
                  top: 28px;
                "
                >Логистическая компания в Гродно</a
              ><iframe
                src="https://yandex.by/map-widget/v1/?ll=23.825658%2C53.711301&mode=search&oid=100614216891&ol=biz&z=18"
                width="440"
                height="312"
                frameborder="1"
                allowfullscreen="true"
                style="position: relative"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <form action="submit">
        <div class="[&>*]:mb-[32px] last:[&>*]:mb-0">
          <div class="flex max-1250:flex-col text-base font-light">
            <div
              class="w-[320px] max-1250:w-full mr-[16px] [&>label]:flex [&>label]:flex-col [&>label]:mb-[16px] min-1250:last:[&>label]:mb-0"
            >
              <label>
                <span>
                  Ваше имя:
                  <mark class="text-base pl-[2px] bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <input
                  type="text"
                  v-model="formData.name"
                  class="font-normal border-[1px] border-[#D8D8D8] py-[12px] px-[5px] bg-cultured"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.name.$error,
                  }"
                  @change="v$.name.$touch"
                />
                <span v-if="v$.name.$error" class="text-sm text-warning">
                  {{ v$.name.$errors[0]?.$message }}
                </span>
              </label>

              <label>
                <span>
                  e-mail:
                  <mark class="text-base pl-[2px] bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <input
                  type="text"
                  v-model="formData.email"
                  class="font-normal border-[1px] border-[#D8D8D8] py-[12px] px-[5px] bg-cultured"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.email.$error,
                    'border-[#42d392] outline-[#42d392] ': !v$.email.$invalid,
                  }"
                  @change="v$.email.$touch"
                />
                <span v-if="v$.email.$error" class="text-sm text-warning">
                  {{ v$.email.$errors[0]?.$message }}
                </span>
              </label>

              <label>
                <span> Телефон:</span>
                <input
                  class="font-normal border-[1px] border-[#D8D8D8] py-[12px] px-[5px] bg-cultured"
                  type="text"
                />
              </label>

              <label>
                <span> Город:</span>
                <input
                  class="font-normal border-[1px] border-[#D8D8D8] py-[12px] px-[5px] bg-cultured"
                  type="text"
                />
              </label>
            </div>
            <div class="w-[432px]">
              <label class="flex flex-col">
                <span>
                  Сообщение:
                  <mark class="text-base pl-[2px] bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <textarea
                  v-model="formData.message"
                  class="font-normal border-[1px] border-[#D8D8D8] h-[230px] bg-cultured py-[5px] px-[5px]"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.message.$error,
                    'border-[#42d392] outline-[#42d392] ': !v$.message.$invalid,
                  }"
                  @change="v$.message.$touch"
                ></textarea>
                <span v-if="v$.message.$error" class="text-sm text-warning">
                  {{ v$.message.$errors[0]?.$message }}
                </span>
              </label>
            </div>
          </div>

          <div>
            <p class="text-sm font-normal text-[#7a7a7a]">
              Подтвердите, что вы не робот:
              <mark class="text-xl bg-[white] text-warning">*</mark>
            </p>
            Captcha
          </div>

          <div>
            <div class="flex">
              <input
                @click="toggleValue()"
                type="checkbox"
                class="custom-checkbox"
                id="checkbox"
                name="checkbox"
                value="true"
              />
              <label class="text-base font-light" for="checkbox">
                Я&#160;согласен на&#160;
                <a
                  href="./lorem.pdf"
                  target="_blank"
                  class="font-normal underline"
                >
                  обработку персональных данных
                </a>
              </label>
            </div>
            <div v-show="!checkboxObject.value && checkboxObject.isPressed">
              <p class="text-sm text-warning">
                {{ v$.checkbox.$errors[0]?.$message }}
              </p>
            </div>
          </div>

          <button
            @click.prevent="submitForm()"
            type="submit"
            class="text-base font-normal border-0 rounded-[8px] px-[60px] py-[18px] bg-secondary hover:text-[#FFFFFF] active:translate-y-[-3px] active:shadow-xl"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>

    <div class="pb-[40px] font-primary font-normal text-primary">
      <p>© ООО “ЭмАйТех” 2023</p>
    </div>
  </div>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
} from "@vuelidate/validators";

const formData = reactive({
  name: "",
  email: "",
  message: "",
  checkbox: null,
});

const checkboxObject = reactive({
  value: false,
  isPressed: false,
});

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage("Это поле обязательное", required),
    },
    email: {
      required: helpers.withMessage("Это поле обязательное", required),
      email: helpers.withMessage("e-mail введён некорректно", email),
    },
    message: {
      required: helpers.withMessage("Это поле обязательное", required),
      minLength: helpers.withMessage(
        "Сообщение должно быть длиннее тридцати символов",
        minLength(30)
      ),
      maxLength: helpers.withMessage(
        "Сообщение не должно быть длиннее пятисот символов",
        maxLength(500)
      ),
    },

    checkbox: {
      required: helpers.withMessage(
        "Для отправки разрешите обработку персональных данных",
        required
      ),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const submitForm = () => {
  checkboxObject.isPressed = true;
  v$.value.$validate();
};

function toggleValue() {
  checkboxObject.value = !checkboxObject.value;
  console.log("value: " + checkboxObject.value);
  console.log("isPressed: " + checkboxObject.isPressed);
}

function forcePdf(pdf) {
  window.open(pdf, "_blank");
}
</script>
