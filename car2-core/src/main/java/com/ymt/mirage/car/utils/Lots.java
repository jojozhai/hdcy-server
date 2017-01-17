/*
 * 项目名称：car2-core
 * 类名称: Lots
 * 创建时间: 2017年1月8日 下午3:29:41
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2017 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.RandomUtils;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import com.ymt.pz365.framework.core.exception.PzException;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
@Component
@Profile("weixin")
public class Lots implements InitializingBean {
    
    private Map<String, List<String>> lots;
    
    public String draw(String sex) {
        
        if(!StringUtils.equals(sex, "1") && 
                !StringUtils.equals(sex, "2")) {
            throw new PzException("性别("+sex+")错误,必须为1或2");
        }
        
        List<String> items = lots.get(sex);
        
        return items.get(RandomUtils.nextInt(items.size())) ;
        
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        
        List<String> manLots = buildLots("1");
        List<String> womanLots = buildLots("2");
        List<String> supermanLots = buildLots("3");
        

        manLots.addAll(supermanLots);
        womanLots.addAll(supermanLots);
        
        lots = new HashMap<>();
        lots.put("1", manLots);
        lots.put("2", womanLots);
        
    }

    private List<String> buildLots(String type) {
        List<String> manLots = new ArrayList<>();
        for (int i = 0; i < 30; i++) {
            manLots.add("lot-"+type+"-"+(i+1)+".png");
        }
        return manLots;
    }

//    private List<Lot> transform(String fileName) throws IOException {
//        List<String> strings = FileUtils.readLines(new ClassPathResource(fileName).getFile());
//        List<Lot> lots = new ArrayList<>();
//        for (String string : strings) {
//            Lot lot = new Lot();
//            lot.setContent(StringUtils.substringAfter(string, ","));
//            String name = StringUtils.substringBefore(string, ",");
//            for(int i=0; i < name.length(); i++){  
//                lot.addName(name.substring(i, i+1));
//                lot.addSpell(getSpecll(name.charAt(i)));
//            }
//            lots.add(lot);
//        }
//        return lots;
//    }
//    
//    private String getSpecll(char charAt) {
//        String[] spells = PinyinHelper.toHanyuPinyinStringArray(charAt);
//        if(ArrayUtils.isNotEmpty(spells)) {
//            return StringUtils.capitalize(StringUtils.substring(spells[0], 0, spells[0].length() - 1));
//        }
//        return "";
//    }

//    public static void main(String[] args) {
//        System.out.println(ArrayUtils.toString(PinyinHelper.toHanyuPinyinStringArray("重".charAt(0))));
//    }
    
    

}
