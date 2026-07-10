var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// astro:db:astro:db
var astro_db_exports = {};
__reExport(astro_db_exports, virtual_star);
import * as virtual_star from "@astrojs/db/dist/runtime/virtual.js";

// db/config.ts
var Guestbook = (0, astro_db_exports.defineTable)({
  columns: {
    id: astro_db_exports.column.number({ primaryKey: true, autoIncrement: true }),
    name: astro_db_exports.column.text(),
    message: astro_db_exports.column.text(),
    website: astro_db_exports.column.text({ optional: true }),
    parentId: astro_db_exports.column.number({ optional: true, deprecated: true }),
    heartCount: astro_db_exports.column.number({ optional: true }),
    createdAt: astro_db_exports.column.date()
  }
});
var config_default = (0, astro_db_exports.defineDb)({
  tables: {
    Guestbook
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYXN0cm86ZGI6YXN0cm86ZGIiLCAiZGIvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tIFwiQGFzdHJvanMvZGIvZGlzdC9ydW50aW1lL3ZpcnR1YWwuanNcIiIsICJpbXBvcnQgeyBkZWZpbmVEYiwgZGVmaW5lVGFibGUsIGNvbHVtbiB9IGZyb20gJ2FzdHJvOmRiJztcclxuXHJcbmNvbnN0IEd1ZXN0Ym9vayA9IGRlZmluZVRhYmxlKHtcclxuICBjb2x1bW5zOiB7XHJcbiAgICBpZDogY29sdW1uLm51bWJlcih7IHByaW1hcnlLZXk6IHRydWUsIGF1dG9JbmNyZW1lbnQ6IHRydWUgfSksXHJcbiAgICBuYW1lOiBjb2x1bW4udGV4dCgpLFxyXG4gICAgbWVzc2FnZTogY29sdW1uLnRleHQoKSxcclxuICAgIHdlYnNpdGU6IGNvbHVtbi50ZXh0KHsgb3B0aW9uYWw6IHRydWUgfSksXHJcbiAgICBwYXJlbnRJZDogY29sdW1uLm51bWJlcih7IG9wdGlvbmFsOiB0cnVlLCBkZXByZWNhdGVkOiB0cnVlIH0pLFxyXG4gICAgaGVhcnRDb3VudDogY29sdW1uLm51bWJlcih7IG9wdGlvbmFsOiB0cnVlIH0pLFxyXG4gICAgY3JlYXRlZEF0OiBjb2x1bW4uZGF0ZSgpLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8gaHR0cHM6Ly9hc3Ryby5idWlsZC9kYi9jb25maWdcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lRGIoe1xyXG4gIHRhYmxlczoge1xyXG4gICAgR3Vlc3Rib29rLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsOEJBQWM7OztBQ0VkLElBQU0sZ0JBQVksOEJBQVk7QUFBQSxFQUM1QixTQUFTO0FBQUEsSUFDUCxJQUFJLHdCQUFPLE9BQU8sRUFBRSxZQUFZLE1BQU0sZUFBZSxLQUFLLENBQUM7QUFBQSxJQUMzRCxNQUFNLHdCQUFPLEtBQUs7QUFBQSxJQUNsQixTQUFTLHdCQUFPLEtBQUs7QUFBQSxJQUNyQixTQUFTLHdCQUFPLEtBQUssRUFBRSxVQUFVLEtBQUssQ0FBQztBQUFBLElBQ3ZDLFVBQVUsd0JBQU8sT0FBTyxFQUFFLFVBQVUsTUFBTSxZQUFZLEtBQUssQ0FBQztBQUFBLElBQzVELFlBQVksd0JBQU8sT0FBTyxFQUFFLFVBQVUsS0FBSyxDQUFDO0FBQUEsSUFDNUMsV0FBVyx3QkFBTyxLQUFLO0FBQUEsRUFDekI7QUFDRixDQUFDO0FBR0QsSUFBTyxxQkFBUSwyQkFBUztBQUFBLEVBQ3RCLFFBQVE7QUFBQSxJQUNOO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
