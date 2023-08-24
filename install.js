const models = [
    "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank128/control-lora-canny-rank128.safetensors",
    "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank128/control-lora-depth-rank128.safetensors",
    "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank128/control-lora-recolor-rank128.safetensors",
    "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank128/control-lora-sketch-rank128-metadata.safetensors",
    "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-canny-rank256.safetensors",
    "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-depth-rank256.safetensors",
    "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-recolor-rank256.safetensors",
    "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-sketch-rank256.safetensors"
].map((model) => {
  return {
    method: "fs.download",
    params: {
      url: model,
      dir: "https://github.com/cocktailpeanut/comfyui.pinokio.git/ComfyUI/models/ControlNet/control-lora"
    }
  }
}).concat({
  method: "fs.download",
  params: {
    url: "https://huggingface.co/stabilityai/control-lora/resolve/main/revision/clip_vision_g.safetensors",
    dir: "https://github.com/cocktailpeanut/comfyui.pinokio.git/ComfyUI/models/clip_vision"
  }
})

const workflows = [
  "https://huggingface.co/stabilityai/control-lora/resolve/main/comfy-control-LoRA-workflows/control-lora-canny-basic_example.json",
  "https://huggingface.co/stabilityai/control-lora/resolve/main/comfy-control-LoRA-workflows/control-lora-depth-basic_example.json",
  "https://huggingface.co/stabilityai/control-lora/resolve/main/comfy-control-LoRA-workflows/control-lora-recolor-basic_example.json",
  "https://huggingface.co/stabilityai/control-lora/resolve/main/comfy-control-LoRA-workflows/control-lora-sketch-basic_example.json",
  "https://huggingface.co/stabilityai/control-lora/resolve/main/revision/revision-basic_example.json",
  "https://huggingface.co/stabilityai/control-lora/resolve/main/revision/revision-image_mixing_example.json",
].map((url) => {
  return {
    method: "fs.download",
    params: {
      url: url,
      path: "https://github.com/cocktailpeanut/comfyui.pinokio.git/workflows/" + url.split("/").slice(-1)[0]
    }
  }
})
module.exports = {
  run: models.concat(workflows).concat([{
    method: "input",
    params: {
      title: "Install Complete",
      description: "All the models and workflows have been saved to comfyui.pinokio.git. Go back to the dashboard and launch ComfyUI"
    }
  }, {
    method: "browser.open",
    params: {
      url: "/?selected=ComfyUI"
    }
  }])
}
