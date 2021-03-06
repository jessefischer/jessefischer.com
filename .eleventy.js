module.exports = function( eleventyConfig ) {

	eleventyConfig.addPassthroughCopy( "src/img" );
	eleventyConfig.addPassthroughCopy( "src/js" );
	eleventyConfig.addPassthroughCopy( "src/css" );
	eleventyConfig.addPassthroughCopy( "src/admin" );

	eleventyConfig.setBrowserSyncConfig( {
		open: "local"
	});
	
	return {
  		dir: {
    		input: "src",
    		output: "dist",
    		data: "data",
    		includes: "includes"
  		}
	};
}