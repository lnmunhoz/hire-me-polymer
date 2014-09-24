# &lt;braziljs-light&gt;

Web Components Experiment using [Ambient Light API](http://www.w3.org/TR/ambient-light/) presented on [BrazilJS Conf 2013](http://braziljs.com.br).

> Maintained by [Zeno Rocha](https://github.com/zenorocha).

## Demo

![BrazilJS Element](http://zno.io/Qxy8/braziljs.gif)

> [Check it live](http://braziljs.github.io/braziljs-light).

> **Attention:** Ambient Light API only works in Firefox 22 (Mac OS X).

## Usage

1. Import Web Components' polyfill:

	```xml
	<script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.0.20130816/polymer.min.js"></script>
	```

2. Import Custom Element:

	```xml
	<link rel="import" href="src/braziljs-light.html">
	```

3. Start using it!

	```xml
	<braziljs-light></braziljs-light>
	```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* [v0.1.2](https://github.com/braziljs/braziljs-light/releases/tag/0.1.2) September 9, 2013
	* Rename element from `<braziljs>` to `<braziljs-light>`
	* Rename repo from `braziljs-element` to `braziljs-light`
* [v0.1.1](https://github.com/braziljs/braziljs-light/releases/tag/0.1.1) September 3, 2013
	* Use Polymer from CDN and update it to v0.0.20130816
* [v0.1.0](https://github.com/braziljs/braziljs-light/releases/tag/0.1.0) August 21, 2013
	* Initial development release
* v0.0.1 August 20, 2013
	* Started project using [boilerplate-element](https://github.com/customelements/boilerplate-element)

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha