const rgb_values = [[[169, 48, 159], 'magenta_concrete.png'], [[116, 90, 52], 'stripped_spruce_log.png'], [[80, 154, 126], 'oxidized_cut_copper.png'], [[77, 51, 36], 'brown_terracotta.png'], [[120, 73, 42], 'crafting_table_top.png'], [[110, 48, 152], 'purple_glazed_terracotta.png'], [[232, 227, 218], 'chiseled_quartz_block.png'], [[45, 47, 143], 'blue_concrete.png'], [[33, 10, 60], 'crying_obsidian.png'], [[43, 114, 101], 'warped_nylium.png'], [[202, 160, 75], 'bee_nest_top.png'], [[53, 110, 110], 'warped_stem_top.png'], [[197, 180, 133], 'fletching_table_top.png'], [[111, 145, 31], 'melon_top.png'], [[159, 159, 159], 'smooth_stone.png'], [[58, 59, 78], 'warped_stem.png'], [[198, 119, 24], 'pumpkin_top.png'], [[181, 98, 31], 'red_sandstone_top.png'], [[148, 122, 65], 'dirt_path_top.png'], [[134, 108, 93], 'dripstone_block.png'], [[89, 88, 92], 'polished_basalt_side.png'], [[70, 69, 69], 'observer_side.png'], [[101, 49, 71], 'crimson_planks.png'], [[92, 93, 89], 'deepslate_copper_ore.png'], [[21, 119, 136], 'cyan_concrete.png'], [[192, 167, 130], 'fletching_table_side.png'], [[168, 168, 168], 'smooth_stone_slab_side.png'], [[216, 203, 156], 'sandstone.png'], [[80, 83, 79], 'reinforced_deepslate_top.png'], [[126, 85, 54], 'brown_concrete_powder.png'], [[130, 123, 120], 'dead_tube_coral_block.png'], [[155, 155, 148], 'light_gray_concrete_powder.png'], [[120, 54, 48], 'stripped_mangrove_log.png'], [[148, 119, 82], 'loom_front.png'], [[67, 61, 64], 'netherite_block.png'], [[108, 108, 107], 'blast_furnace_front.png'], [[44, 38, 44], 'cracked_polished_blackstone_bricks.png'], [[166, 91, 52], 'stripped_acacia_log_top.png'], [[196, 115, 24], 'pumpkin_side.png'], [[85, 85, 85], 'bedrock.png'], [[163, 198, 55], 'lime_glazed_terracotta.png'], [[235, 230, 223], 'quartz_pillar_top.png'], [[58, 151, 148], 'stripped_warped_stem.png'], [[197, 176, 118], 'stripped_birch_log.png'], [[234, 236, 237], 'white_wool.png'], [[85, 68, 25], 'jungle_log.png'], [[251, 245, 206], 'ochre_froglight_top.png'], [[193, 84, 185], 'magenta_concrete_powder.png'], [[161, 166, 179], 'clay.png'], [[103, 32, 156], 'purple_shulker_box.png'], [[119, 120, 123], 'lodestone_side.png'], [[236, 230, 223], 'quartz_block_top.png'], [[132, 135, 134], 'polished_andesite.png'], [[122, 56, 83], 'stripped_crimson_stem_top.png'], [[42, 203, 88], 'emerald_block.png'], [[246, 240, 240], 'pearlescent_froglight_top.png'], [[79, 82, 80], 'reinforced_deepslate_bottom.png'], [[132, 124, 120], 'dead_fire_coral_block.png'], [[103, 49, 42], 'mangrove_log_top.png'], [[15, 11, 25], 'obsidian.png'], [[109, 85, 51], 'oak_log.png'], [[168, 90, 50], 'acacia_planks.png'], [[108, 81, 50], 'barrel_side.png'], [[172, 128, 171], 'purpur_pillar_top.png'], [[80, 80, 83], 'deepslate.png'], [[132, 56, 178], 'purple_concrete_powder.png'], [[50, 59, 39], 'dried_kelp_top.png'], [[81, 81, 86], 'basalt_top.png'], [[151, 98, 83], 'bricks.png'], [[151, 89, 55], 'acacia_log_top.png'], [[116, 85, 49], 'barrel_bottom.png'], [[134, 96, 67], 'dirt.png'], [[215, 152, 53], 'jack_o_lantern.png'], [[121, 113, 94], 'furnace_front_on.png'], [[77, 81, 85], 'gray_concrete_powder.png'], [[162, 84, 38], 'orange_terracotta.png'], [[241, 146, 18], 'honey_block_bottom.png'], [[89, 110, 45], 'moss_block.png'], [[143, 62, 54], 'tnt_top.png'], [[251, 185, 53], 'honey_block_top.png'], [[236, 231, 224], 'quartz_pillar.png'], [[70, 59, 45], 'muddy_mangrove_roots_top.png'], [[108, 109, 103], 'tuff.png'], [[121, 120, 120], 'furnace_side.png'], [[38, 49, 30], 'dried_kelp_side.png'], [[110, 105, 97], 'piston_side.png'], [[88, 75, 58], 'smoker_front.png'], [[229, 244, 228], 'verdant_froglight_top.png'], [[110, 110, 110], 'furnace_top.png'], [[140, 110, 110], 'redstone_ore.png'], [[108, 107, 108], 'blast_furnace_side.png'], [[58, 175, 217], 'light_blue_wool.png'], [[98, 98, 98], 'observer_top.png'], [[236, 230, 223], 'quartz_block_side.png'], [[189, 188, 189], 'diorite.png'], [[245, 233, 182], 'ochre_froglight_side.png'], [[23, 120, 121], 'warped_wart_block.png'], [[217, 215, 210], 'birch_log.png'], [[175, 93, 60], 'stripped_acacia_log.png'], [[89, 59, 41], 'note_block.png'], [[21, 138, 145], 'cyan_wool.png'], [[54, 49, 57], 'chiseled_polished_blackstone.png'], [[155, 147, 92], 'orange_glazed_terracotta.png'], [[107, 118, 141], 'lapis_ore.png'], [[89, 109, 109], 'sculk_catalyst_bottom.png'], [[119, 86, 59], 'coarse_dirt.png'], [[94, 169, 24], 'lime_concrete.png'], [[106, 106, 105], 'coal_ore.png'], [[218, 206, 160], 'cut_sandstone.png'], [[16, 16, 16], 'coal_block.png'], [[96, 60, 32], 'brown_concrete.png'], [[118, 66, 62], 'nether_quartz_ore.png'], [[70, 50, 34], 'cartography_table_side1.png'], [[183, 142, 76], 'bee_nest_front.png'], [[66, 44, 23], 'stripped_dark_oak_log_top.png'], [[167, 132, 74], 'beehive_front_honey.png'], [[114, 146, 30], 'melon_side.png'], [[87, 87, 89], 'deepslate_top.png'], [[249, 198, 40], 'yellow_wool.png'], [[92, 91, 91], 'furnace_front.png'], [[68, 44, 20], 'cartography_table_side3.png'], [[166, 136, 38], 'hay_block_side.png'], [[137, 104, 79], 'mud_bricks.png'], [[113, 109, 138], 'light_blue_terracotta.png'], [[122, 122, 122], 'stone_bricks.png'], [[76, 60, 36], 'loom_bottom.png'], [[182, 88, 84], 'tnt_side.png'], [[189, 102, 32], 'cut_red_sandstone.png'], [[65, 65, 65], 'cracked_deepslate_bricks.png'], [[80, 91, 115], 'deepslate_lapis_ore.png'], [[55, 58, 62], 'gray_concrete.png'], [[77, 94, 90], 'sculk_catalyst_side.png'], [[20, 121, 135], 'cyan_shulker_box.png'], [[100, 173, 23], 'lime_shulker_box.png'], [[196, 192, 75], 'sponge.png'], [[117, 72, 32], 'composter_bottom.png'], [[55, 35, 36], 'smithing_table_side.png'], [[186, 98, 28], 'red_sandstone_bottom.png'], [[82, 62, 42], 'cartography_table_side2.png'], [[161, 126, 104], 'exposed_copper.png'], [[53, 49, 57], 'polished_blackstone.png'], [[207, 213, 214], 'white_concrete.png'], [[55, 55, 55], 'deepslate_tiles.png'], [[143, 102, 61], 'redstone_lamp_on.png'], [[72, 73, 73], 'polished_deepslate.png'], [[167, 67, 53], 'tnt_bottom.png'], [[73, 72, 78], 'smooth_basalt.png'], [[53, 57, 157], 'blue_wool.png'], [[143, 63, 32], 'magma.png'], [[73, 73, 78], 'basalt_side.png'], [[43, 105, 99], 'warped_planks.png'], [[102, 109, 101], 'reinforced_deepslate_side.png'], [[246, 208, 62], 'gold_block.png'], [[132, 127, 127], 'gravel.png'], [[37, 23, 16], 'black_terracotta.png'], [[115, 103, 78], 'deepslate_gold_ore.png'], [[97, 119, 45], 'green_concrete_powder.png'], [[73, 91, 36], 'green_concrete.png'], [[115, 85, 49], 'spruce_planks.png'], [[99, 98, 98], 'dispenser_front_vertical.png'], [[160, 130, 77], 'stripped_oak_log_top.png'], [[162, 78, 79], 'pink_terracotta.png'], [[111, 99, 101], 'mycelium_top.png'], [[118, 221, 215], 'beacon.png'], [[47, 24, 28], 'chiseled_nether_bricks.png'], [[207, 91, 159], 'brain_coral_block.png'], [[120, 119, 120], 'chiseled_stone_bricks.png'], [[77, 77, 81], 'cobbled_deepslate.png'], [[249, 254, 254], 'snow.png'], [[95, 55, 30], 'redstone_lamp.png'], [[60, 57, 61], 'mud.png'], [[131, 31, 31], 'crimson_nylium.png'], [[48, 43, 50], 'polished_blackstone_bricks.png'], [[107, 106, 104], 'smoker_bottom.png'], [[50, 59, 39], 'dried_kelp_bottom.png'], [[114, 72, 41], 'brown_wool.png'], [[232, 227, 217], 'chiseled_quartz_block_top.png'], [[128, 127, 128], 'cobblestone.png'], [[142, 119, 92], 'loom_top.png'], [[136, 129, 123], 'iron_ore.png'], [[56, 43, 38], 'gilded_blackstone.png'], [[142, 107, 80], 'packed_mud.png'], [[147, 149, 153], 'lodestone_top.png'], [[157, 126, 76], 'beehive_side.png'], [[226, 227, 228], 'white_concrete_powder.png'], [[52, 92, 76], 'dark_prismarine.png'], [[139, 97, 139], 'shulker_box.png'], [[99, 156, 151], 'prismarine.png'], [[100, 32, 156], 'purple_concrete.png'], [[84, 67, 41], 'mangrove_log.png'], [[233, 199, 55], 'yellow_concrete_powder.png'], [[171, 181, 70], 'wet_sponge.png'], [[202, 170, 120], 'mushroom_block_inside.png'], [[152, 94, 68], 'terracotta.png'], [[76, 68, 68], 'observer_back_on.png'], [[108, 153, 110], 'weathered_copper.png'], [[183, 97, 28], 'chiseled_red_sandstone.png'], [[70, 7, 9], 'red_nether_bricks.png'], [[58, 42, 36], 'gray_terracotta.png'], [[235, 155, 182], 'pink_glazed_terracotta.png'], [[154, 107, 89], 'polished_granite.png'], [[25, 25, 30], 'black_shulker_box.png'], [[151, 122, 73], 'oak_log_top.png'], [[57, 59, 71], 'smithing_table_top.png'], [[196, 151, 77], 'bee_nest_side.png'], [[71, 71, 71], 'deepslate_bricks.png'], [[73, 57, 36], 'stripped_dark_oak_log.png'], [[136, 136, 137], 'andesite.png'], [[55, 59, 62], 'gray_shulker_box.png'], [[229, 153, 181], 'pink_concrete_powder.png'], [[216, 203, 155], 'chiseled_sandstone.png'], [[187, 99, 29], 'red_sandstone.png'], [[145, 134, 107], 'gold_ore.png'], [[230, 122, 158], 'pink_shulker_box.png'], [[83, 90, 94], 'gray_glazed_terracotta.png'], [[94, 64, 47], 'jukebox_top.png'], [[216, 221, 221], 'white_shulker_box.png'], [[140, 31, 30], 'red_shulker_box.png'], [[137, 57, 90], 'stripped_crimson_stem.png'], [[78, 104, 88], 'deepslate_emerald_ore.png'], [[37, 148, 157], 'cyan_concrete_powder.png'], [[44, 46, 140], 'blue_shulker_box.png'], [[106, 66, 36], 'brown_shulker_box.png'], [[150, 84, 17], 'carved_pumpkin.png'], [[68, 30, 32], 'black_glazed_terracotta.png'], [[135, 107, 98], 'light_gray_terracotta.png'], [[220, 220, 220], 'iron_block.png'], [[105, 73, 75], 'deepslate_redstone_ore.png'], [[126, 126, 126], 'stone.png'], [[214, 101, 143], 'pink_concrete.png'], [[103, 97, 87], 'acacia_log.png'], [[99, 99, 101], 'polished_basalt_top.png'], [[82, 163, 133], 'oxidized_copper.png'], [[112, 70, 32], 'composter_side.png'], [[170, 151, 133], 'grass_block_snow.png'], [[123, 149, 92], 'piston_top_sticky.png'], [[107, 100, 95], 'deepslate_iron_ore.png'], [[132, 124, 119], 'dead_bubble_coral_block.png'], [[52, 129, 124], 'stripped_warped_stem_top.png'], [[208, 100, 192], 'magenta_glazed_terracotta.png'], [[220, 223, 158], 'end_stone.png'], [[108, 136, 116], 'emerald_ore.png'], [[92, 63, 24], 'podzol_top.png'], [[117, 142, 67], 'green_glazed_terracotta.png'], [[40, 20, 24], 'cracked_nether_bricks.png'], [[165, 26, 162], 'bubble_coral_block.png'], [[44, 22, 26], 'nether_bricks.png'], [[241, 175, 21], 'yellow_concrete.png'], [[47, 65, 139], 'blue_glazed_terracotta.png'], [[193, 179, 135], 'birch_log_top.png'], [[85, 84, 81], 'smoker_top.png'], [[229, 176, 168], 'target_side.png'], [[85, 110, 28], 'green_wool.png'], [[79, 101, 32], 'green_shulker_box.png'], [[168, 54, 51], 'red_concrete_powder.png'], [[216, 202, 154], 'sandstone_bottom.png'], [[241, 118, 20], 'orange_wool.png'], [[63, 68, 72], 'gray_wool.png'], [[54, 54, 55], 'chiseled_deepslate.png'], [[120, 106, 86], 'brown_glazed_terracotta.png'], [[248, 253, 253], 'powder_snow.png'], [[116, 168, 253], 'blue_ice.png'], [[125, 125, 115], 'light_gray_concrete.png'], [[64, 28, 24], 'smithing_table_bottom.png'], [[74, 60, 91], 'blue_terracotta.png'], [[226, 170, 158], 'target_top.png'], [[146, 184, 254], 'ice.png'], [[74, 74, 76], 'deepslate_coal_ore.png'], [[21, 21, 26], 'black_wool.png'], [[95, 66, 58], 'ancient_debris_top.png'], [[210, 178, 161], 'white_terracotta.png'], [[68, 45, 22], 'dark_oak_log_top.png'], [[144, 104, 77], 'rooted_dirt.png'], [[155, 122, 101], 'exposed_cut_copper.png'], [[241, 147, 71], 'shroomlight.png'], [[122, 122, 122], 'dispenser_front.png'], [[182, 60, 53], 'red_glazed_terracotta.png'], [[98, 237, 228], 'diamond_block.png'], [[115, 121, 105], 'mossy_stone_bricks.png'], [[115, 55, 42], 'nether_gold_ore.png'], [[42, 36, 42], 'blackstone_top.png'], [[104, 118, 53], 'lime_terracotta.png'], [[146, 101, 72], 'loom_side.png'], [[186, 133, 35], 'yellow_terracotta.png'], [[112, 185, 26], 'lime_wool.png'], [[193, 193, 195], 'polished_diorite.png'], [[89, 59, 41], 'jukebox_side.png'], [[200, 47, 45], 'red_mushroom_block.png'], [[176, 25, 5], 'redstone_block.png'], [[143, 61, 47], 'red_terracotta.png'], [[72, 70, 70], 'observer_back.png'], [[191, 107, 81], 'cut_copper.png'], [[142, 180, 250], 'packed_ice.png'], [[103, 87, 67], 'cartography_table_top.png'], [[81, 62, 51], 'soul_sand.png'], [[161, 39, 35], 'red_wool.png'], [[142, 142, 135], 'light_gray_wool.png'], [[129, 106, 70], 'crafting_table_front.png'], [[118, 54, 49], 'mangrove_planks.png'], [[144, 166, 168], 'light_gray_glazed_terracotta.png'], [[109, 44, 43], 'stripped_mangrove_log_top.png'], [[115, 3, 2], 'nether_wart_block.png'], [[149, 112, 81], 'brown_mushroom_block.png'], [[191, 103, 33], 'red_sand.png'], [[234, 106, 9], 'orange_shulker_box.png'], [[70, 73, 167], 'blue_concrete_powder.png'], [[161, 127, 88], 'bee_nest_bottom.png'], [[96, 64, 56], 'ancient_debris_side.png'], [[248, 189, 29], 'yellow_shulker_box.png'], [[162, 131, 79], 'oak_planks.png'], [[236, 225, 229], 'pearlescent_froglight_side.png'], [[177, 144, 86], 'stripped_oak_log.png'], [[104, 103, 103], 'observer_front.png'], [[67, 43, 20], 'dark_oak_planks.png'], [[59, 38, 17], 'spruce_log.png'], [[172, 131, 84], 'glowstone.png'], [[99, 172, 158], 'prismarine_bricks.png'], [[25, 27, 32], 'black_concrete_powder.png'], [[164, 35, 47], 'fire_coral_block.png'], [[110, 118, 95], 'mossy_cobblestone.png'], [[113, 50, 70], 'crimson_stem_top.png'], [[166, 123, 82], 'stripped_jungle_log_top.png'], [[106, 80, 47], 'stripped_spruce_log_top.png'], [[170, 126, 170], 'purpur_block.png'], [[160, 115, 81], 'jungle_planks.png'], [[229, 226, 208], 'bone_block_side.png'], [[238, 141, 172], 'pink_wool.png'], [[31, 67, 140], 'lapis_block.png'], [[135, 101, 58], 'barrel_top.png'], [[118, 118, 118], 'stonecutter_bottom.png'], [[98, 38, 38], 'netherrack.png'], [[191, 172, 116], 'stripped_birch_log_top.png'], [[52, 119, 125], 'cyan_glazed_terracotta.png'], [[112, 192, 92], 'slime_block.png'], [[124, 118, 114], 'dead_brain_coral_block.png'], [[219, 207, 163], 'sand.png'], [[118, 70, 86], 'purple_terracotta.png'], [[95, 165, 209], 'light_blue_glazed_terracotta.png'], [[15, 11, 25], 'enchanting_table_bottom.png'], [[68, 59, 48], 'muddy_mangrove_roots_side.png'], [[83, 106, 107], 'deepslate_diamond_ore.png'], [[87, 91, 91], 'cyan_terracotta.png'], [[60, 47, 26], 'dark_oak_log.png'], [[172, 130, 172], 'purpur_pillar.png'], [[74, 181, 213], 'light_blue_concrete_powder.png'], [[203, 197, 186], 'mushroom_stem.png'], [[42, 36, 41], 'blackstone.png'], [[57, 37, 39], 'smithing_table_front.png'], [[227, 132, 32], 'orange_concrete_powder.png'], [[234, 192, 89], 'yellow_glazed_terracotta.png'], [[122, 42, 173], 'purple_wool.png'], [[251, 188, 58], 'honey_block_side.png'], [[218, 224, 162], 'end_stone_bricks.png'], [[229, 148, 30], 'honeycomb_block.png'], [[109, 80, 47], 'spruce_log_top.png'], [[150, 109, 71], 'jungle_log_top.png'], [[224, 214, 170], 'sandstone_top.png'], [[159, 128, 78], 'beehive_front.png'], [[166, 139, 12], 'hay_block_top.png'], [[93, 26, 30], 'crimson_stem.png'], [[188, 212, 203], 'white_glazed_terracotta.png'], [[237, 230, 224], 'quartz_block_bottom.png'], [[181, 146, 90], 'beehive_end.png'], [[81, 80, 81], 'blast_furnace_top.png'], [[125, 189, 42], 'lime_concrete_powder.png'], [[134, 126, 122], 'dead_horn_coral_block.png'], [[103, 92, 76], 'smoker_side.png'], [[53, 53, 53], 'cracked_deepslate_tiles.png'], [[171, 133, 85], 'stripped_jungle_log.png'], [[153, 128, 85], 'piston_top.png'], [[210, 206, 179], 'bone_block_top.png'], [[49, 164, 212], 'light_blue_shulker_box.png'], [[97, 97, 97], 'piston_bottom.png'], [[173, 155, 111], 'fletching_table_front.png'], [[149, 103, 86], 'granite.png'], [[132, 96, 187], 'budding_amethyst.png'], [[36, 137, 199], 'light_blue_concrete.png'], [[129, 103, 63], 'crafting_table_side.png'], [[134, 98, 191], 'amethyst_block.png'], [[142, 33, 33], 'red_concrete.png'], [[235, 229, 222], 'quartz_bricks.png'], [[118, 118, 118], 'cracked_stone_bricks.png'], [[8, 10, 15], 'black_concrete.png'], [[124, 124, 115], 'light_gray_shulker_box.png'], [[224, 97, 1], 'orange_concrete.png'], [[117, 95, 60], 'bookshelf.png'], [[195, 152, 76], 'bee_nest_front_honey.png'], [[211, 235, 208], 'verdant_froglight_side.png'], [[192, 175, 121], 'birch_planks.png'], [[174, 54, 164], 'magenta_shulker_box.png'], [[76, 58, 47], 'soul_soil.png'], [[121, 141, 141], 'diamond_ore.png']]

function generate_gradient() {
    const start_color = hexToRgb(document.getElementById("start_color").value)
    const end_color = hexToRgb(document.getElementById("end_color").value)
    const num_steps = document.getElementById("num_steps").value

    let steps = []
    steps.push(start_color)
    for (let step = 0; step < num_steps - 2; step++){
        steps.push(
        {r:start_color["r"] * (((num_steps - 1) - step) / (num_steps)) + (end_color["r"] * (step / (num_steps))),
        g:start_color["g"] * (((num_steps - 1) - step) / (num_steps)) + (end_color["g"] * (step / (num_steps))),
        b:start_color["b"] * (((num_steps - 1) - step) / (num_steps)) + (end_color["b"] * (step / (num_steps)))
    })}
    steps.push(end_color)
    let blocks = []
    for (let step = 0; step < steps.length; step++) {
        //console.log(step)
        let top_block = ['N/A',0]
        for (let block_data = 0; block_data < rgb_values.length; block_data++) {
            calcR = ( 255 - Math.abs(steps[step]["r"] - rgb_values[block_data][0][0]) ) / 255
            calcG = ( 255 - Math.abs(steps[step]["g"] - rgb_values[block_data][0][1]) ) / 255
            calcB = ( 255 - Math.abs(steps[step]["b"] - rgb_values[block_data][0][2]) ) / 255
            //console.log(calcR + calcG + calcB)
            //console.log(steps[step])
            if ((calcR + calcG + calcB) / 3 > top_block[1]) {
                top_block = [rgb_values[block_data][1],(calcR + calcG + calcB) / 3]

            }
        }
    blocks.push(top_block[0])
    }
    let list = document.createElement("p")
    list.innerHTML = blocks
    for (let block = 0; block < blocks.length; block++){
        let img = document.createElement("img")
        img.src = "minecraft_blocks/" + blocks[block]
        img.width = 12
        img.height = 12
        document.getElementsByTagName('body')[0].appendChild(img);
    }
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

function genRandHex(){
    let randHex1 = [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    let randHex2 = [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    document.getElementById("start_color").value = "#" + randHex1
    document.getElementById("end_color").value = "#" + randHex2 
} 
