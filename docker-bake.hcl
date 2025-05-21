target "default" {
	output = ["type=local,dest=./build"]
	tags = ["php-wasm"]

	 cache-from = ["type=local,src=./.buildx-cache"]
     cache-to   = ["type=local,dest=./.buildx-cache"]
}
