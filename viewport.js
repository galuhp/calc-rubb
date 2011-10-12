var hitung = function (btn, evt) {
           var inlayl = parseInt(Ext.getCmp('inlayl').getValue() );
           var inlayp = parseInt(Ext.getCmp('inlayply').getValue() );
           var tebaltop =parseInt(Ext.getCmp('tebaltop').getValue() ) /2 ;
           var lebartop = inlayl;
           var quality1 = parseInt(Ext.getCmp('q').getValue() );
           var quality2 = parseInt(Ext.getCmp('q2').getValue() );
           
           var lebarbott = inlayl;
           var tebalbott = parseInt( Ext.getCmp('tebalbott').getValue() ) /2 ;
           
           var hrinlay= 15085 / 30 ; //harga inlay per 1 lembar
           var hrreg= 18742 / 30  ; //hrg karet reguler
           
           var totinlay = inlayl * inlayp * hrinlay ;
           var tot_top = tebaltop * lebartop * hrreg ; 
           var tot_bott = tebalbott * lebarbott * hrreg ; 
           
           //Ext.Msg.alert(quality1);
           
           switch (quality1)
           {
           	case 1:
           		atas= tot_top * 1.65;
           		break;
           	case 2:
           		atas= tot_top * 1.95;
           		break;
           	case 3:
           		atas= tot_top * 2.2;
           		break;
           	case 4:
           		atas= tot_top * 2.4;
           		break;
           }
           
           switch (quality2)
           {
           	case 1:
           		bawah= tot_bott * 1.65;
           		break;
           	case 2:
           		bawah= tot_bott * 1.95;
           		break;
           	case 3:
           		bawah= tot_bott * 2.2;
           		break;
           	case 4:
           		bawah= tot_bott * 2.4;
           		break;
           }
           
           var totalsemua=atas+bawah+totinlay;
           Ext.getCmp('totala').setValue(totalsemua);
        }
        
Calc.views.Viewport = Ext.extend(Ext.form.FormPanel, {
    fullscreen: true,
    title: 'CB Calc',
    items: [
    {
    	xtype:'fieldset',
    	title:'Inlay',
     	items:[
		    	{
		    		xtype:'textfield',
		    	  id:'inlayl',
		    	  label:'Lebar'
		    	},
		    	{
		    		xtype:'textfield',
		    	  id:'inlayply',
		    	  label:'Ply'
		    	}
    	]
    
    } ,
    {
    	xtype:'fieldset',
    	title:'Top Cover',
     	items:[
		    	
		    	{
		    		xtype:'textfield',
		    	  id:'tebaltop',
		    	  label:'Tebal'
		    	},
		    	{	label:'Quality',
		    		xtype:'selectfield',
		    		id:'q',
		    		options:
		    		[
		    		{text:'General',value:1},
		    		{text:'Premium',value:2},
		    		{text:'Super',value:3},
		    		{text:'HA',value:4}
		    		]
		    		
		    		
		    		}
    	]
    
    } ,
    {
    	xtype:'fieldset',
    	title:'Bottom Cover',
     	items:[
		    	
		    	{
		    		xtype:'textfield',
		    	  id:'tebalbott',
		    	  label:'Tebal'
		    	},
		    	{	label:'Quality',
		    		xtype:'selectfield',
		    		id:'q2',
		    		options:
		    		[
		    		{text:'General',value:1},
		    		{text:'Premium',value:2},
		    		{text:'Super',value:3},
		    		{text:'HA',value:4}
		    		]
		    		
		    		
		    	},{xtype:'spacer'},
		    	{
		    		xtype:'textfield',
		    	  id:'totala',
		    	  label:'Total Harga'
		    	
		    	
		    	}
		    
    	]
    
    },
    { xtype:'button',
    	text:'Hitung',
    	ui:'action',
    	width:'50%',
    	handler: hitung
    },
    { xtype:'button',
    	text:'Reset',
    	ui:'action',
    	width:'50%'
    	}
    
    ]
    
   
}



);