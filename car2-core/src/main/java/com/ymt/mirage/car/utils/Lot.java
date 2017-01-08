/*
 * 项目名称：car2-core
 * 类名称: Lot
 * 创建时间: 2017年1月8日 下午3:44:54
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2017 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.utils;

import java.util.ArrayList;
import java.util.List;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
public class Lot {
    
    private List<String> names;
    
    private List<String> spells;
    
    private String content;
    
    public void addName(String name) {
        if(names == null) {
            names = new ArrayList<>();
        }
        names.add(name);
    }
    
    public void addSpell(String spell) {
        if(spells == null) {
            spells = new ArrayList<>();
        }
        spells.add(spell);
    }

    /**
     * @return the names
     */
    public List<String> getNames() {
        return names;
    }

    /**
     * @param names the names to set
     */
    public void setNames(List<String> names) {
        this.names = names;
    }

    /**
     * @return the spells
     */
    public List<String> getSpells() {
        return spells;
    }

    /**
     * @param spells the spells to set
     */
    public void setSpells(List<String> spells) {
        this.spells = spells;
    }

    /**
     * @return the content
     */
    public String getContent() {
        return content;
    }

    /**
     * @param content the content to set
     */
    public void setContent(String content) {
        this.content = content;
    }
    
}
