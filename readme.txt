=== Qty Plus Minus Buttons for WooCommerce ===
Contributors: im_niloy,taisho
Tags: woocommerce,quantity,increment,qty plus minus
Requires at least: 4.6
Tested up to: 6.8
Requires PHP: 5.4
Stable tag: 2.7.6
License: GPLv3
License URL: http://www.gnu.org/licenses/gpl-3.0.html

Adds professionally looking "-" and "+" quantity Plus Minus button around product quantity field on WooCommerce pages.

== Description ==

Adds professionally looking "-" and "+" quantity Plus Minus button around product quantity field on WooCommerce pages. Removes default increment arrows inside this field. Easy customization through plugin settings.

<h4>Features</h4>

* Adds "-" and "+" quantity buttons around product quantity field.
* Removes default increment arrows inside the quantity input field, which are built-in by browsers.
* Works on product, cart, checkout, shop, category or optionally all pages.
* Quantity field with increment buttons can be added to shop page, category page or both.
* Should look great on most of the themes out of the box. Extensively tested on Storefront theme.
* Fully responsive design.
* Plugin settings allow to customize buttons.
* Generated with PHP - visible immediately on page load.
* Buttons are not displayed for items sold individually.
* Compatible with Quick View plugins.


== Screenshots ==

1. Cart page - Silver style with square buttons merged
2. Product page - Black style with rectangle buttons unmerged
3. Plugin settings

== Installation ==

<h4>Recommended:</h4>
Install and activate from WordPress "Plugins > Add New" screen.

<h4>Manual installation:</h4>
1. Unzip plugin file and upload folder to directory /wp-content/plugins/
1. Activate plugin in WordPress \"Plugins\" menu.

== Frequently Asked Questions ==

= Will this plugin work correctly on my website? =

Qty Increment Buttons for WooCommerce is designed to work on any WooCommerce-based website. It's tested for compatibility with version 3.0 (previously 2.6) and newer. Assumed to work since 2.3 in which quantity buttons were removed from WooCommerce core.

= How to make the buttons display on the Home page?

The buttons will display properly on a regular Home page that is also a WooCommerce shop or category page if the corresponding Archives display option in plugin settings is enabled. For a custom home page (or any other custom page), enabling the plugin to work on all pages in settings should do the trick. However, depending on how much it differs from regular WooCommerce page, the functionality and visuals can be negatively affected.

= My buttons are poorly aligned. How can I fix it? =

While very flexible in theme support, this plugin can't handle all custom layouts. The biggest offenders are themes using !important in their CSS rules that affect the quantity input field and the buttons. It can be solved by using the same selector with different rules in child theme's style.css or extra CSS if the theme allows it. Feel free to report CSS-related problems on the support forum.

= Will this plugin affect my page speed? =

Very little, it's a small plugin that executes only on product, cart, checkout, shop and category pages, unless an option to load the plugin on all pages is checked. CSS in the head is minified.

== Changelog ==

= 2.7.6 =
* Fixed: PHP fatal errors for latest PHP version.
* Fixed: Function `_load_textdomain_just_in_time` was called incorrectly.
* Added: Declare compatible with High-Performance Order Storage/COT.
* Compatibility with WooCommerce 10.3.x

= 2.7.5 =
* Hotfixed an issue from 2.7.4 release that caused quantity buttons used by some themes to be visible and appear next to the plugin buttons.

[See changelog for all versions](https://plugins.svn.wordpress.org/qty-increment-buttons-for-woocommerce/trunk/changelog.txt).