import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement } from "vue"
@Component
export default class HButton extends Vue {
  @Prop({
    required: false,
    type: String,
    default(){
      return "#000"
    }
  })
  private color!: string

  public click(e: MouseEvent) {
    const vm = this;
    vm.$emit('click', e)
  }

  render(h: CreateElement) {
    const vm = this;
    return (
      <button style={{color: vm.color}} on-click={vm.click}>
        {vm.$slots.default}
      </button>
    )
  }
}
