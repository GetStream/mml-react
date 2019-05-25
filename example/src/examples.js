export var examples = {
  commerce: `
<mml>
	<md>Which red dress do you prefer?</md>
	<carousel>
		<item>
			<image src="https://i1.adis.ws/i/boohooamplience/agg70544_red_xl?$product_image_main_thumbnail$" />
			<text>Nasty Gal's Hot Damn Dress</text>
			<text>
			It's getting hot in here. This dress features an off-the-shoulder, mini silhouette, ruffled edges, puff sleeves, and lace-up detailing at front.
			</text>
			<md>**$50**</md>
			<button style="primary" url="https://www.nastygal.com/hot-damn-off-the-shoulder-lace-up-dress/AGG70544.html">View</button>
			<button style="secondary" name="action" value="add_to_cart">Add to Cart</button>
		</item>
		<item>
			<image src="https://i1.adis.ws/i/boohooamplience/agg70544_red_xl?$product_image_main_thumbnail$" />
			<text>2 Damn Dress</text>
			<text>
			It's getting hot in here. This dress features an off-the-shoulder, mini silhouette, ruffled edges, puff sleeves, and lace-up detailing at front.
			</text>
			<md>**$50**</md>
			<button style="primary" name="action" value="view">View</button>
			<button style="secondary" name="action" value="add_to_cart">Add to Cart</button>
		</item>
		<item>
			<image src="https://i1.adis.ws/i/boohooamplience/agg70544_red_xl?$product_image_main_thumbnail$" />
			<text>3 Damn Dress</text>
			<text>
			It's getting hot in here. This dress features an off-the-shoulder, mini silhouette, ruffled edges, puff sleeves, and lace-up detailing at front.
			</text>
			<md>**$50**</md>
			<button style="primary" name="action" value="view">View</button>
			<button style="secondary" name="action" value="add_to_cart">Add to Cart</button>
		</item>
		<item>
			<image src="https://i1.adis.ws/i/boohooamplience/agg70544_red_xl?$product_image_main_thumbnail$" />
			<text>4 Damn Dress</text>
			<text>
			It's getting hot in here. This dress features an off-the-shoulder, mini silhouette, ruffled edges, puff sleeves, and lace-up detailing at front.
			</text>
			<md>**$50**</md>
			<button style="primary" name="action" value="view">View Item</button>
			<button style="secondary" name="action" value="add_to_cart">Add to Cart</button>
		</item>
	</carousel>
</mml>`,
  scheduling: `
<mml>
	<text>Are you available to work Thursday the 9th?</text>
	<button style="primary" name="available" value="yes">Yes</button>
	<button style="secondary" name="available" value="no">No</button>
</mml>
	`,
  massage: `
<mml>
	<text>When would you like to schedule your massage?</text>
	<datepicker initial_date="2019-05-25" name="massage_appointment" />
	<timepicker name="massage_appointment_time" />
</mml>
	`,
  paging: `
<mml>
	<text>Alert: The server is on fire!!</text>
	<overflow>
		<button style="secondary" name="action" value="Ignore">Ignore</button>
		<button style="secondary" name="action" value="ReRoute Ticket">ReRoute Ticket</button>
		<button style="secondary" name="action" value="Turn off the server">Turn off the server</button>
		<button style="primary" name="action" value="Book a vacation">Book a vacation</button>
	</overflow>
</mml>
	`,
  "flight info": `
<mml>
	<row>
		<column width="4">San Francisco</column>
		<column width="4"></column>
		<column width="4">New York</column>
	</row>
	<row>
		<column width="4"><md>## SFO</md></column>
		<column width="4"><icon name="flight" /></column>
		<column width="4"><md>## JFK</md></column>
	</row>
	<row>
		<column width="12">
			<button value="view" text="View Boarding Pass" />
		</column>
	</row>
</mml>
	`,
  "email input": `
<mml>
	<text>What's your email?</text>
	<input type="text" name="email" />
	<button style="primary" name="send" value="submit">Submit</button>
</mml>
	`
};